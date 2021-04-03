import Side_Panel_Left from "./Side_Panel_Left"

const Body = () => {
    return ( 
        <div className="row">
            <div className="col">
                <Side_Panel_Left/>
            </div>
            <div className="m-2 bg-dark col-md-10">
                <div className="container">
                    <table className="table table-light table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>1</td>
                            <td>AAA</td>
                            <td>2021/03/31</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>BBB</td>
                            <td>2021/03/31</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
     );
}
 
export default Body;