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
      .innerJoin("schools", "schools.id", "=", "students.school_id")
      .innerJoin("threads", "threads.student_id", "=", "students.id")
      .innerJoin("bubl", "bubl.id", "=", "threads.bubl_id")
      .where({ "students.id": student })
      .first();
  },

  getAllStudents: async () => {
    return db("students")
      .innerJoin("schools", "schools.id", "=", "students.school_id")
      
  }
};
