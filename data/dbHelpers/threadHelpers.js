const db = require("../dbconfig.js");

module.exports = {
  postThread: async thread => {
    const [id] = await db("threads").insert(thread);

    return db("threads")
      .where({ id })
      .first();
  },
  getThreadById: async thread => {
    return db("threads")
      .select("threads.*", "students.username","bubl.bublName")
      .join("students", "students.id", "threads.student_id")
      .join("bubl", "threads.bubl_id", "bubl.id")
      .where({ "threads.id": thread })
      .first();
  },
  getThreadWithCommentById: async thread => {
    return db("threads")
      .select("threads.*", "students.username","bubl.bublName","comments.comments")
      .join("students", "students.id", "threads.student_id")
      .join("bubl", "threads.bubl_id", "bubl.id")
      .join("comments", "threads.id", "comments.thread_id")
      .where({ "threads.id": thread })
      .first();
  },

  getAllThreads: async () => {
    return db("threads")
    .select("threads.*", "students.username","bubl.bublName")
    .join("students", "students.id", "threads.student_id")
    .join("bubl", "threads.bubl_id", "bubl.id")
  },

};
