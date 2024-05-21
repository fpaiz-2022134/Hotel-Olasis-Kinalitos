'use strict'

import Invoice from './invoice.model.js'
import User from '../user/user.model.js'
import Event from '../event/event.model.js'
import Reservation from '../reservation/reservation.model.js'
import Room from '../room/room.model.js'
import Hotel from '../hotel/hotel.model.js'



import PDFDocument from 'pdfkit-table' 
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

 
 
import {
    checkUpdate
} from '../utils/validator.js'
import { title } from 'process'

export const addInvoice = async (req, res) => {
    try {
        //Getting the data
        let data = req.body
        let { _id } = req.user
        //Setting the client
        data.user = _id
        // Searching some models to get information
        let reservation = await Reservation.findOne({ _id: data.reservation })
        let event = await Event.findOne({ _id: data.event })
        if (!reservation && !event) return res.status(404).send({ message: 'We need information of your event or reservation.' })
        //Checking if the information of the user is valid
        if (reservation != null) {
            if (reservation.userId.toString() != _id.toString()) {
                return res.status(403).send({ message: 'You are not the owner of this reservation' })
            }
        } else if (event != null) {
            if (event.user.toString() != _id.toString()) {
                return res.status(403).send({ message: 'You are not the owner of this event' })
            }
        } else {
            return res.status(403).send({ message: 'You cannot send event and reservation at the same time' })
        }

        //Setting the user
        data.user = _id

        //Setting the total
        if (reservation != null) {
            data.description = reservation.description
            data.entryDate = reservation.entryDate
            data.departureDate = reservation.departureDate
            data.total = reservation.price
        } else if (event != null) {
            data.description = event.description
            data.entryDate = event.entryDate
            data.departureDate = event.departureDate
            data.total = event.price
        } else {
            return res.status(404).send({ message: 'Reservation or event not found' })
        }

        let invoice = new Invoice(data)
        //Saving the invoice
        await invoice.save()
        //Answer
        let showInvoice = await Invoice.findOne({ _id: invoice.id }).populate('user', ['-_id', 'name', 'username', 'email'])
        return res.status(200).send(showInvoice)
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error adding the invoice.' })
    }
}


//Getting my invoices
export const getMyInvoices = async (req, res) => {
    try {
        let { _id } = req.user
        let invoices = await Invoice.find({ user: _id })
        return res.status(200).send(invoices)
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting the invoices.' })
    }
}


//Getting all invoices

export const getInvoices = async (req, res) => {
    try {
        let invoices = await Invoice.find()
        return res.status(200).send(invoices)
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting the invoices.' })
    }
}

//Searching the invoice
export const searchInvoice = async (req, res) => {
    try {
        let { id } = req.params
        let invoice = await Invoice.findById(id)
        if (!invoice) {
            return res.status(404).send({ message: 'Invoice not found' })
        }
        return res.status(200).send(invoice)
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error searching the invoice.' })
    }
}


//Updating the invoice

export const updateInvoice = async (req, res) => {
    try {
        //IMPORTANT: You can only update the nit, paymentMetho or change the reservation or event.

        let { id } = req.params
        let data = req.body
        //Checking the input information
        if (data.description != null || data.entryDate != null || data.departureDate != null
            || data.total != null) {
            return res.status(400).send({ message: 'If you wantto update another information check your reservation.' })
        }

        //Searching the invoice

        let invoice = await Invoice.findById(id)

        if (data.reservation != null) {
            if (invoice.reservation != data.reservation) {
                let reservation = await findById(data.reservation)
                data.description = reservation.description
                data.entryDate = reservation.entryDate
                data.departureDate = reservation.departureDate
                data.total = reservation.price
            }
        }

        if (data.event != null) {
            if (invoice.event != data.event) {
                let event = await findById(data.event)
                data.description = event.description
                data.entryDate = event.entryDate
                data.departureDate = event.departureDate
                data.total = event.price
            }
        }



        //Checking if the data is valid
        let update = checkUpdate(data, id)
        //Checking the result
        if (!update) return res.status(400).send({ message: 'Have submitted some data that cannot be update or missing.' })
        //Updating the invoice
        let updatedInvoice = await Invoice.updateOne(
            { _id: id },
            data,
            { new: true }
        )
        //Validation of the updated action
        if (!updatedInvoice) return res.status(404).send({ message: 'Invoice not found.' })
        return res.status(200).send(updatedInvoice)

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating the invoice.' })
    }
}

// CREATE PDF


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const createPDFReservation = async (req, res) => {
    try {
        let { id } = req.params
        let invoice = await Invoice.findOne({ _id: id })
        if (!invoice) {
            return res.status(404).send({ message: 'Invoice not found' })
        }

        let customer = await User.findOne({ _id: invoice.user })
        if (!customer) {
            return res.status(404).send({ message: 'Customer not found' })
        }

        let reservation = await Reservation.findOne({ _id: invoice.reservation })
        if (!reservation) {
            return res.status(404).send({ message: 'Reservation not found' })
        }

        let room = await Room.findOne({ _id: reservation.roomId })
        if (!room) {
            return res.status(404).send({ message: 'Room not found' })
        }

        //Creating the document

        const doc = new PDFDocument()
        const table = {
            title: "Invoice OLASIS",
            subtitle: "Invoice generated by OLASIS company.",
            sections: [
                {
                    headers: ["NO. de Factura"],
                    rows: [[invoice._id]],
                },
                {
                    headers: ["Date: "],
                    rows: [[invoice.date || new Date().toISOString().slice(0, 10)]],
                },
                {
                    headers: ["NIT"],
                    rows: [[invoice.nit]],
                },
                {
                    headers: ["Customer"],
                    rows: [[`${customer.name} ${customer.surname} |  Username: ${customer.username}  |  Email: ${customer.email}`]]
                },
                {
                    headers: ["Fecha de Entrada de la reservación"],
                    rows: [[invoice.entryDate]],
                },
                {
                    headers: ["Fecha de Salida de la reservación"],
                    rows: [[invoice.departureDate]],
                },
                {
                    headers: ["Total"],
                    rows:[[invoice.total]]
                },
                {
                    headers: ["Método de Pago"],
                    rows: [[invoice.paymentMethod]]
                },
                {
                    headers: ["Reservación"],
                    rows: [[reservation.description]]
                },
                {
                    headers: [ "Habitación"],
                    rows: [[room.number]]

                }
            ],
        };

        //Añadir el título y subtítulo
        doc.font('Helvetica-Bold').fontSize(20).text(table.title, {align: 'left'})
        doc.font('Helvetica').fontSize(15).text(table.subtitle, {align: 'left'})

        table.sections.forEach(section =>{
            doc.table({
                headers: section.headers,
                rows: section.rows,
                columnGap: 20,
                rowGap: 20,
                margin: [20, 20, 20, 20]
            },{
                width:300
            })

            doc.moveDown()
 

        });

        const filePath = path.join(__dirname, '/pdfInvoice/invoice.pdf')
        
        const writeStream = fs.createWriteStream(filePath)
        doc.pipe(writeStream)
        doc.end()

        await new Promise((resolve, reject)=>{
            writeStream.on('finish', resolve)
            writeStream.on('error', reject)
        })
        
        res.status(200).send({message: 'PDF created and saved.'})
    } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Error creating PDF.' });
}
}
//---------------------------------------------------

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = path.dirname(__filename2);

export const createPDFEvent = async (req, res) => {
    try {
        let { id } = req.params;
        let invoice = await Invoice.findOne({ _id: id });
        if (!invoice) {
            return res.status(404).send({ message: 'Invoice not found' });
        }

        let customer = await User.findOne({ _id: invoice.user });
        if (!customer) {
            return res.status(404).send({ message: 'Customer not found' });
        }

        let event = await Event.findOne({ _id: invoice.event });
        if (!event) {
            return res.status(404).send({ message: 'Event not found' });
        }

        let hotel = await Hotel.findOne({ _id: event.hotel });
        if (!hotel) {
            return res.status(404).send({ message: 'Hotel not found' });
        }

        const doc = new PDFDocument({ margin: 50 });
        const filePath = path.join(__dirname2, 'pdfInvoice', 'invoiceEvent.pdf');
        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);

        doc.font('Helvetica-Bold').fontSize(20).text('Invoice OLASIS', { align: 'center' });
        doc.font('Helvetica').fontSize(15).text('Invoice generated by OLASIS company.', { align: 'center' });

        const table = {
            headers: ['Field', 'Value'],
            rows: [
                ['Invoice No.', invoice._id],
                ['Date', invoice.date || new Date().toISOString().slice(0, 10)],
                ['NIT', invoice.nit],
                ['Customer', `${customer.name} ${customer.surname} | Username: ${customer.username} | Email: ${customer.email}`],
                ['Check-in Date', invoice.entryDate],
                ['Check-out Date', invoice.departureDate],
                ['Total', invoice.total],
                ['Payment Method', invoice.paymentMethod],
                ['Event Name', event.name],
                ['Event Description', event.description],
                ['Hotel Name', hotel.name]
            ]
        };

        // Añadir espaciado adecuado entre cada dato
        doc.table(table, {
            prepareHeader: () => doc.font('Helvetica-Bold').fontSize(12),
            prepareRow: (row, indexColumn, indexRow, rectRow) => {
                doc.font('Helvetica').fontSize(10);
            },
            columnSpacing: 10,  // Ajusta el espacio entre columnas
            columnsSize: [150, 300]  // Ajusta el tamaño de las columnas (puedes ajustar estos valores según sea necesario)
        });

        doc.end();

        await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });

        res.status(200).send({ message: 'PDF created and saved.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Error creating PDF.' });
    }
};




/* 
const __filename2 = fileURLToPath(import.meta.url)
const __dirname2 = path.dirname(__filename2)

export const createPDFEvent = async (req, res) => {
    try {
        let { id } = req.params
        let invoice = await Invoice.findOne({ _id: id })
        if (!invoice) {
            return res.status(404).send({ message: 'Invoice not found' })
        }

        let customer = await User.findOne({ _id: invoice.user })
        if (!customer) {
            return res.status(404).send({ message: 'Customer not found' })
        }

        let event = await Event.findOne({ _id: invoice.event })
        if (!event) {
            return res.status(404).send({ message: 'Event not found' })
        }

        let hotel = await Hotel.findOne({ _id: event.hotel })
        if (!hotel) {
            return res.status(404).send({ message: 'Hotel not found' })
        }

        //Creating the document

        const doc = new PDFDocument()
        const table = {
            title: "Invoice OLASIS",
            subtitle: "Invoice generated by OLASIS company.",
            sections: [
                {
                    headers: ["NO. de Factura"],
                    rows: [[invoice._id]],
                },
                {
                    headers: ["Date: "],
                    rows: [[invoice.date || new Date().toISOString().slice(0, 10)]],
                },
                {
                    headers: ["NIT"],
                    rows: [[invoice.nit]],
                },
                {
                    headers: ["Customer"],
                    rows: [[`${customer.name} ${customer.surname} |  Username: ${customer.username}  |  Email: ${customer.email}`]]
                },
                {
                    headers: ["Fecha de Entrada de la reservación"],
                    rows: [[invoice.entryDate]],
                },
                {
                    headers: ["Fecha de Salida de la reservación"],
                    rows: [[invoice.departureDate]],
                },
                {
                    headers: ["Total"],
                    rows:[[invoice.total]]
                },
                {
                    headers: ["Método de Pago"],
                    rows: [[invoice.paymentMethod]]
                },
                {
                    headers: ["Evento"],
                    rows: [[event.name, event.description]]
                },
                {
                    headers: [ "Hotel"],
                    rows: [[hotel.name]]

                }
            ],
        };

        //Añadir el título y subtítulo
        doc.font('Helvetica-Bold').fontSize(20).text(table.title, {align: 'left'})
        doc.font('Helvetica').fontSize(15).text(table.subtitle, {align: 'left'})

        table.sections.forEach(section =>{
            doc.table({
                headers: section.headers,
                rows: section.rows,
                columnGap: 20,
                rowGap: 20,
                margin: [20, 20, 20, 20]
            },{
                width:300
            })

            doc.moveDown()
 

        });

        const filePath = path.join(__dirname2, '/pdfInvoice/invoiceEvent.pdf')
        
        const writeStream = fs.createWriteStream(filePath)
        doc.pipe(writeStream)
        doc.end()

        await new Promise((resolve, reject)=>{
            writeStream.on('finish', resolve)
            writeStream.on('error', reject)
        })
        
        res.status(200).send({message: 'PDF created and saved.'})
    } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Error creating PDF.' });
}
} */







//Deleting the invoice. We don't need to delete because the invoice is not going to have that action.
/* export const disableInvoice = async (req, res) => {
    try {
        //Getting the id
        let { id } = req.params 
        //Searching the invoice
        let invoice = await Invoice.findOne({ _id: id })
        if (!invoice) return res.status(404).send({ message: 'Invoice not found.' })
        //Changing the status of the invoice

        let updatedInvoice = await Invoice.updateOne(
            { _id: id },
            { status: false },
            { new: true }
        )
        if (!updatedInvoice) return res.status(400).send({ message: 'Invoice was not updated.' })
        return res.status(200).send({ message: 'Invoice was successfully updated.' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error deleting your invoice.' })
    }
} */