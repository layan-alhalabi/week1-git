
# Course Enrolment API

## 1. Get All Courses
- Method: GET
- Path: /courses
- Status Codes:
  - 200 OK

## 2. Get Course Details
- Method: GET
- Path: /courses/{courseId}
- Status Codes:
  - 200 OK
  - 404 Not Found

## 3. Create New Enrolment
- Method: POST
- Path: /enrolments
- Status Codes:
  - 201 Created
  - 400 Bad Request
  - 409 Conflict

## 4. Get Enrolment Details
- Method: GET
- Path: /enrolments/{enrolmentId}
- Status Codes:
  - 200 OK
  - 404 Not Found

## 5. Delete Enrolment
- Method: DELETE
- Path: /enrolments/{enrolmentId}
- Status Codes:
  - 204 No Content
  - 404 Not Found


 