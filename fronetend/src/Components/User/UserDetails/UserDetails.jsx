import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import DisplayUser from "../DisplayUser/DisplayUser";
import { useReactToPrint } from "react-to-print";
import './UserDetails.css'; // Import the CSS file

const URL = "http://localhost:3001/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const componentsRef = useRef();

  useEffect(() => {
    fetchHandler().then((data) => {
      const usersList = data.users || data;
      setUsers(usersList);
      setFilteredUsers(usersList);
    });
  }, []);

  // Update the filtered users as the search query changes
  useEffect(() => {
    const filtered = users.filter((user) =>
      Object.values(user).some((field) =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setFilteredUsers(filtered);
    setNoResults(filtered.length === 0);
  }, [searchQuery, users]);

  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
    documentTitle: "Users Report",
    onAfterPrint: () => alert("Users report successfully downloaded"),
  });

  return (
    <div className="user-details-container">
      <div className="search-container">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search users"
          value={searchQuery}
        />
        {/* The search button can be removed if you want the search to be purely dynamic */}
      </div>

      {noResults ? (
        <div className="no-results">
          <p>No users found</p>
        </div>
      ) : (
        <div className="user-list" ref={componentsRef}>
          {filteredUsers.map((user) => (
            <div key={user._id}>
              <DisplayUser user={user} />
            </div>
          ))}
        </div>
      )}

      <button className="download-button" onClick={handlePrint}>Download Report</button>
    </div>
  );
}
