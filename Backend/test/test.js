// test/taskController.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Your Express app
const Task = require('./../db/details'); // Your Task model

chai.use(chaiHttp);
chai.should();

describe('Task API', () => {
  beforeEach(async () => {
    // Clear the database before each test
    await Task.deleteMany({});
  });

  describe('GET /tasks', () => {
    it('should get all tasks', (done) => {
      // Seed the database with a task
      const task = new Task({
        assignedTo: 'User 1',
        status: 'Completed',
        dueDate: '2024-10-12',
        priority: 'Low',
        comments: 'This task is good'
      });

      task.save((err, task) => {
        chai.request(app)
          .get('/tasks')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
            done();
          });
      });
    });

    it('should return an empty array when no tasks are found', (done) => {
      chai.request(app)
        .get('/tasks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
