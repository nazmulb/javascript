function grade(number) {
    switch (true) {
      case (number > -1 && number <33) :
        console.log('Letter Grade: F and Grade point: 0');
        break;
      case ( number > 32 &&  number < 40) :
        console.log('Letter Grade: D and Grade point: 1');
        break;
      case ( number > 39 &&  number < 50) :
        console.log('Letter Grade: C and Grade point: 2');
        break;
      case ( number > 49 &&  number < 60) :
        console.log('Letter Grade: B and Grade point: 3');
        break;
      case ( number > 59  &&  number < 70) :
        console.log('Letter Grade: A- and Grade point: 3.5');
        break;
      case ( number > 69 &&  number < 80) :
        console.log('Letter Grade: A and Grade point: 4');
        break;             
      case ( number > 79 &&  number <= 100) :
        console.log('Letter Grade: A+ and Grade point: 5');
        break;
      default:
        console.log('Invalid Number');
        break;
    }
  }
  
  grade(100);