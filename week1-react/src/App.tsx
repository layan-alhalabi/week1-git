
import { useEffect, useState } from 'react'
import './App.css'

interface Course {
  id: number
  name: string
  instructor: string
}

function App() {
  const [courses, setCourses] = useState<Course[]>([])
  const [search, setSearch] = useState('')
  const [studentName, setStudentName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch courses from Express API
  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load courses')
        }
        return response.json()
      })
      .then(data => {
        setCourses(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load courses. Please try again.')
        setLoading(false)
      })
  }, [])

  // Filter courses
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase())
  )

  // Enrol in a course
  const handleEnrol = async (courseId: number) => {
    setMessage('')

    try {
      const response = await fetch('http://localhost:3000/enrolments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          studentName,
          courseId
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Enrolment failed')
      }

      setMessage(data.message)
    } catch (err) {
      setMessage(
        err instanceof Error ? err.message : 'Something went wrong'
      )
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Online Courses</h1>
        <p>Explore our courses and start learning!</p>
      </header>

      <main>
        <input
          type="text"
          placeholder="Enter your name"
          value={studentName}
          onChange={e => setStudentName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Search for a course..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {message && <p className="message">{message}</p>}

        {loading && <p>Loading courses...</p>}

        {error && <p className="error">{error}</p>}

        <div className="courses">
          {filteredCourses.map(course => (
            <div className="course-card" key={course.id}>
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>

              <button
                onClick={() => handleEnrol(course.id)}
                disabled={!studentName.trim()}
              >
                Enrol
              </button>
            </div>
          ))}
        </div>

        {!loading && filteredCourses.length === 0 && (
          <p>No courses found.</p>
        )}
      </main>
    </div>
  )
}

export default App
