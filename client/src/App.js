import React, { useState, useEffect } from "react";
import { Pagination } from "semantic-ui-react";
import Users from "./components/Users";
import axios from "axios";

const App = () => {
  const [active, setActive] = useState(1);
  const [pages, setPages] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:3000/users?page=${active}&limit=${limit}`
      );
      setPages(res.data.pages);
      setUsers(res.data.results);
      setLoading(false);
    };

    fetchUsers();
  }, [active]);

  const handlePaginationChange = (e, { activePage }) => setActive(activePage);

  return (
    <div>
      <h1>Pagination</h1>
      <Users users={users} loading={loading} />
      <Pagination
        boundaryRange={0}
        defaultActivePage={active}
        onPageChange={handlePaginationChange}
        siblingRange={1}
        totalPages={pages}
      />
    </div>
  );
};

export default App;
