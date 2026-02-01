import React from 'react'
import { useParams } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

const LanguageResult = () => {
  const { language } = useParams()

  // 👉 later backend se aayega
  const results = [
    {
      name: 'Rahul Kumar',
      email: 'rahul@gmail.com',
      score: 18,
      total: 20,
    },
    {
      name: 'Ankit Singh',
      email: 'ankit@gmail.com',
      score: 15,
      total: 20,
    },
    {
      name: 'Neha Sharma',
      email: 'neha@gmail.com',
      score: 12,
      total: 20,
    },
  ]

  // ranking + percentage
  const rankedResults = [...results]
    .map((r) => ({
      ...r,
      percentage: Math.round((r.score / r.total) * 100),
    }))
    .sort((a, b) => b.score - a.score)

  const getPerformance = (p) => {
    if (p >= 80) return 'Excellent'
    if (p >= 60) return 'Good'
    if (p >= 40) return 'Average'
    return 'Poor'
  }

  return (
    <>
      <AdminNavbar />

      <div style={styles.page}>
        <h1 style={styles.heading}>
          {language?.toUpperCase()} Quiz Results
        </h1>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Performance</th>
              </tr>
            </thead>

            <tbody>
              {rankedResults.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    {student.score}/{student.total}
                  </td>
                  <td>{student.percentage}%</td>
                  <td>{getPerformance(student.percentage)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {rankedResults.length === 0 && (
            <p style={styles.empty}>No results found</p>
          )}
        </div>
      </div>
    </>
  )
}

export default LanguageResult

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    minHeight: '100vh',
    padding: '40px',
    background: '#0b0b0b',
    color: '#fff',
  },
  heading: {
    fontSize: '26px',
    marginBottom: '24px',
  },
  tableWrapper: {
    background: '#111',
    borderRadius: '14px',
    padding: '20px',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  empty: {
    marginTop: '20px',
    color: '#aaa',
  },
}
