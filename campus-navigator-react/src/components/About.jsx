import React from 'react'

export default function () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <p>
        Explore U. is an interactive campus navigation application designed to help students, faculty, staff, and visitors find their way around Chitkara University, Punjab.

        The application provides an interactive campus map, searchable locations, category-based filters, and detailed information about campus buildings and facilities. Users can explore academic blocks, administrative offices, food outlets, hostels, parking areas, and other important locations.

        It also includes features such as recent searches, current location selection, and shortest-path navigation to make finding places around campus easier and more convenient.
      </p>
      <h2>Our Aim</h2>
      <p>Our aim is to make campus navigation simpler, faster, and more accessible by bringing important campus locations and navigation features together in one application.</p>
      <strong>Made with <span><i className="fa-regular fa-heart"
        style={{
          color: 'red'
        }}></i></span> by Explore U. Team.</strong>
    </div>
  )
}
