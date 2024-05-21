import { Table } from "../../components/Category/Table.jsx";
import './Category.css';

export const Category = () => {
  return (
    <div className="container-main">
        <div className="row">
            <div className="col-md-6">
                <div className="left-div">
                    {/* Contenido de left-div */}
                </div>
            </div>
            <div className="col-md-6">
                <div className="right-div">
                    <Table />
                </div>
            </div>
        </div>
    </div>
  );
};
