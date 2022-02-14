const request = require('supertest');

const {restore} = require('../../src/utils/fileHelpers');
const app = require('../../src/app');
const endFunction = require('./helpers/supertest-jasmine');

describe('/pets', () => {
  afterEach(() => {
    restore();
  });

  describe('GET', ()=>{
    it('200 ok', (done)=>{
      request(app)
        .get('/pets')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(endFunction(done));

    });

    it('200 get a pet', async(done)=>{
      var petExpected = {
        "specie": "Dog",
        "gender": "Male",
        "name": "Rufus",
        "description": "Rufus is not with Hartman&#039;s Haven. We are trying to help his current owner find him a new home.   He&#039;s...",
        "url": "https://www.petfinder.com/dog/rufus-48552609/nc/conover/hartmans-haven-nc757/?referrer_id=5957d654-0b8d-4a02-bbae-6c7dd49e1074",
        "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48552609/1/?bust=1595351589&width=300"
      }

      const {status, body: petGet} = await require(app)
      .get('/pets/:Rufus')
      .set('Accept', 'application/json')
      .end(endFunction(done));

      expect(status).toEqual(200);
      expect(petExpected).toEqual(petGet);


    })
  })

  describe('POST',()=>{
    it('200 ok with ', async()=>{
      //Arrange
      var newPet = {
        "specie": "Dog",
        "gender": "Female",
        "name": "Juana",
        "description": "Hello, my name is Juana de arco. I am a 1 yr old female American bulldog current on vaccinations -rabies, distemper/parvo,...",
        "url": "https://www.petfinder.com/dog/daisy-mea-48555066/mt/billings/help-for-homeless-pets-mt46/?referrer_id=5957d654-0b8d-4a02-bbae-6c7dd49e1074",
        "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48555066/2/?bust=1595362488&width=300"

      }
      //Act
      const {status,body:pet} = await request(app)
        .post('/pets')
        .send(newPet)
        .set('Accept', 'application/json');



      //Assert

      expect(status).toEqual(200);
      expect(newPet).toEqual(pet);
    })

  })
});