import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const UsersTable = ({users}) => {
    return (
        <div>
            <Table bordered hover>
                <thead className="table-secondary">
                <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Email</th>
                    <th className='text-center'>Phone</th>
                    <th className='text-center'>Website</th>
                    <th className='text-center' colSpan={3}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td className="text-center align-middle">{user.id}</td>
                        <td className="align-middle">{user.name}</td>
                        <td className="align-middle">{user.email}</td>
                        <td className="align-middle">{user.phone}</td>
                        <td className="align-middle">{user.website}</td>
                        <td className='text-center tdWidth align-middle'>
                            <Button className='buttonWidth align-middle'
                                    variant="success"
                                    as={Link}
                                    to={`/users/user/${user.id}`}>
                                View
                            </Button>
                        </td>
                        <td className='text-center tdWidth align-middle'>
                            <Button className='buttonWidth'
                                    variant="primary"
                                    as={Link}
                                    to={`/users/edit-user/${user.id}`}>
                                Edit
                            </Button></td>
                        <td className='text-center tdWidth align-middle'>
                            <Button className='buttonWidth'
                                    variant="danger"
                                    as={Link}
                                    to={`/users/delete-user/${user.id}`}>
                                Delete
                            </Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
};
UsersTable.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string,
            website: PropTypes.string,
        })
    ).isRequired,
};
export default UsersTable;