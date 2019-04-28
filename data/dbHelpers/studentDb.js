const db = require('../dbconfig.js');

module.exports = {
   


  insertStudent: async (student)=>{
      const [id] = await db('students').insert(student);

      return db('students').where({id}).first();
  },

 getAllStudents: async () =>{
      return db('students').innerJoin('schools', 'schools.id','=', 'students.school_id');
  }

};