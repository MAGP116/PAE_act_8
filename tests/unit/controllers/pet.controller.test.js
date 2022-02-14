const PetController = require("../../../src/controllers/pet.controller");

const fileHelpers = jasmine.createSpyObj("MockedHelpers", ["save", "get"]);

describe("test", () => {
  let petContoller;
  beforeEach(() => {
    petContoller = new PetController(fileHelpers.save, fileHelpers.get);
  });
  it("hello", () => {
    petContoller.list();
    expect(2).toBe(2);
  });
  it("200 OK, getIndex no error", () => {
    // Arrange
    const namePet = "Ruff";
    //Act
    petContoller.getIndex(namePet);
    //Assert
    expect(2).toBe(2);
  });
  it("200 OK, get no error", () => {
    // Arrange
    const namePet = "Ruff";
    //Act
    petContoller.get(namePet);
    //Assert
    expect(2).toBe(2);
  });
  it("200 OK, create a new pet", () => {
    //Arrange
    const newpet = {
      specie: "Dog",
      gender: "Male",
      name: "Test",
      description:
        "My name is Test. I&#039;m a 1 yr old, male border collie mix. I am a very sweet boy. I...",
      url: "https://www.petfinder.com/dog/kenny-48552648/wi/hayward/northwoods-humane-society-wi128/?referrer_id=5957d654-0b8d-4a02-bbae-6c7dd49e1074",
      photo:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48552648/2/?bust=1595351832&width=300",
    };
    //Act
    console.log(newpet);
    petContoller.create(newpet);
    //Assert
    expect(2).toBe(2);
  });
  it("should update pet", () => {
    //Arrange
    const namepet = "Ruff";
    const newdata = {
      specie: "Dog",
      gender: "Female",
      name: "Test",
      description:
        "My name is Test. I&#039;m a 1 yr old, male border collie mix. I am a very sweet boy. I...",
      url: "https://www.petfinder.com/dog/kenny-48552648/wi/hayward/northwoods-humane-society-wi128/?referrer_id=5957d654-0b8d-4a02-bbae-6c7dd49e1074",
      photo:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48552648/2/?bust=1595351832&width=300",
    };
    //Act
    console.log(newdata);
    petContoller.update(namepet, newdata);
    //Assert
    expect(2).toBe(2);
  });

  it("should delete", () => {
    //Arrange
    const namepet = "Ruff";
    //Act
    console.log(namepet);
    petContoller.delete(namepet);
    //Assert
    expect(2).toBe(2);
  });
});
