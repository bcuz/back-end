const db = require("../dbconfig.js");

module.exports = {
  insertStudent: async student => {
    const [id] = await db("students").insert(student);

    return db("students")
      .where({ id })
      .first();
  },
  getStudentById: async student => {
    

    return db("students")
      .join("schools", "schools.id",  "students.school_id")
      .join("threads", "students.id", "threads.student_id")
      .join("bubl","threads.bubl_id", "bubl.id")
      .where({ "students.id": student })
      .first();
  },

  getAllStudents: async () => {
    return db("students")
      .join("schools", "schools.id", "=", "students.school_id")
           
  },
  registerStudent: async (student)=>{
    const id = await db('students').insert(student);

    return getStudentById(id);
  }
};
