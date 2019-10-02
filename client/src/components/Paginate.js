import React, { useState, useEffect } from "react";
import { Pagination } from "semantic-ui-react";
import axios from "axios";

const Paginate = () => {
  const [active, setActive] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      //   setLoading(true);
      // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const res = await axios.get("http://localhost:3000/users?page=1&limit=5");
      setUsers(res.data);
      //   setLoading(false);
    };

    fetchUsers();
  }, []);

  const handlePaginationChange = (e, { activePage }) => setActive(activePage);

  console.log(users);

  return (
    <div>
      <h1>qwqwss</h1>
      <Pagination
        boundaryRange={0}
        defaultActivePage={active}
        onPageChange={handlePaginationChange}
        siblingRange={1}
        totalPages={10}
      />
    </div>
  );
};

export default Paginate;
