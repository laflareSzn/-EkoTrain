document.addEventListener("DOMContentLoaded", function () { 

  function showSearchForTrains() {
    document.querySelector("#searchForTrains").style.display = "block";
    document.querySelector("#availableTrains").style.display = "none";
    document.querySelector("#selectClass").style.display = "none";
    document.querySelector("#yourTicket").style.display = "none";
  }

  showSearchForTrains(); // Show searchForTrains initially

  // When the user clicks the "Search for Trains" button
  document.querySelector("#searchBtn").addEventListener("click", function () {
    // Add your existing logic for validating input here

    // Display the availableTrains section
    document.querySelector("#searchForTrains").style.display = "none";
    document.querySelector("#availableTrains").style.display = "block";
  });

  // When the user clicks the "Book Now" button in availableTrains section
  document.querySelector(".bookTrain").addEventListener("click", function () {
    // Add your logic for processing the selected train here

    // Display the selectClass section
    document.querySelector("#availableTrains").style.display = "none";
    document.querySelector("#selectClass").style.display = "block";
  });

  // When the user clicks the "Book Now" button in selectClass section
  document.querySelector(".bookClass").addEventListener("click", function () {
    // Add your logic for processing the selected class here

    // Display the yourTicket section
    document.querySelector("#selectClass").style.display = "none";
    document.querySelector("#yourTicket").style.display = "block";
  });

  // When the user clicks the "Cancel" button
  document.querySelector(".cancelBook").addEventListener("click", function () {
    // Reload the page
    window.location.reload();
  });

  // Additional logic or modifications can be added based on your requirements
});

document.addEventListener("DOMContentLoaded", function() {

    // When the site loads, it display only the searchForTrains section
    function searchForTrains() {
  
      document.querySelector("#searchForTrains").style.display = "none";
      document.querySelector("#availableTrains").style.display = "inline-block";
  }
  
    document.querySelector("#availableTrains").style.display = "none";
    document.querySelector("#selectClass").style.display = "none";
    document.querySelector("#yourTicket").style.display = "none";
    $(document).off('click', '.bookClass').on('click', '.bookClass', function() {
  
      document.querySelector("#selectClass").style.display = "none";
      document.querySelector("#yourTicket").style.display = "inline-block";
  });
  
    // Makes it so that the user can only select a future date
    let currentDate = new Date();
    let minDate = new Date().toISOString().split("T")[0];
  
    let datepicker = document.getElementById("datepicker");
    datepicker.min = minDate;
  
    // Displays the availableTrains section
    searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", () => {
      from = document.querySelector(".from").value;
      to = document.querySelector(".to").value;
      date = document.querySelector("#datepicker").value;
  
      // Makes sure the user have entered all the data
      if (!(from && to && date)) {
            alert("Please Select All Fields!");
            return false;
          }
          else if(from == to)
            {
              alert("From and To can't be the same");
              return false;
            }
  
      document.querySelector("#searchForTrains").style.display = "none";
      document.querySelector("#availableTrains").style.display = "inline-block";
    
    })
  
    // Changes the background color of the avilableTrains on hover
    $("tbody > tr").mouseover(function() {
  
      $(this).css("backgroundColor", "rgba(112, 105, 136, 0.89)");
  
    }).mouseout(function() {
  
      $(this).css("backgroundColor", "");
    });
  
    // Gets the data of the selected row from the availableTrains
    $("tbody > tr").on('click', function() {
  
      $(this).parent().children().removeClass("selected");
      $(this).addClass("selected");
  
      // Updates the Total price as the user changes the number of seats
      costPerSeat = $(".selected").find(".costPerSeat").text();
      noOfSeats = $(".selected").find(".noOfSeats").val();
      totalCost = costPerSeat * noOfSeats;
      $(".totalPrice").html(totalCost);
              
    });
        
    // Displays the selectClass section
    $(".bookTrain").click(function() {
  
      // Gets the all data of the selected row
      costPerSeat = $(".selected").find(".costPerSeat").text();
      trainNumber = $(".selected").find(".trainNumber").text();
      trainName = $(".selected").find(".trainName").text();
      trainTime = $(".selected").find(".trainTime").text();
      noOfSeats = $(".selected").find(".noOfSeats").val();
      classCost = $(".selected")
  
      
      // Makes sure the user has selected a Train
      if (!trainNumber) {
        alert("Please Select Your Train!")
        return false;
      }
  
      document.querySelector("#availableTrains").style.display = "none";
      document.querySelector("#selectClass").style.display = "inline-block";
      
      // Displays the ticket
      $(document).off('click', '.bookClass').on('click', '.bookClass', function() {

        var selectedClass = $("input[name='toggle']:checked").val();
        if (!selectedClass) {
            alert("Please select a class!");
            return false;
          }
          alert("Booking successful! Class: " + selectedClass);

        // Calculates the total cost
        className = document.querySelector('input[name="toggle"]:checked+span').innerHTML;
        $(".typeOfClass").html(className);
        classType = document.querySelector('input[name="toggle"]:checked+span');
        classCost = classType.getAttribute("value");
        totalCost = (costPerSeat * noOfSeats) + (Number(classCost) * noOfSeats);
        $(".trainCost").html(totalCost);
       
        document.querySelector("#yourTicket").style.display = "inline-block";
        document.querySelector("#selectClass").style.display = "none";
  
      });
  
      // Refreshes the page when the user clicks on the cancel button
      $(".cancelBook").click(function() {
        window.location.reload()
      })
      
      // Updates the HTML with the new data entered by the user
      $("#From").html(from);
      $("#To").html(to);
      $(".trainName").html(trainName);
      $(".trainTime").html(trainTime);
      $(".costPerSeat").html(totalCost);
      $(".noOfSeats").html(noOfSeats);
      $(".trainNumber").html(trainNumber);
    
      // Displays the date of the ticket booked
      var d = new Date();
      var n = d.toLocaleDateString();
      document.querySelector(".ticketDate").innerHTML = n;
      
      // Barcode
      var code = '11010011001001010110010110110010101010101101010101101';
  
      table = $('#barcodes tr');
      for (var i = 0; i < code.length; i++) {
  
        if (code[i] == 1) {
          table.append('<td bgcolor="black">')
        } 
        else {
          table.append('<td bgcolor="white">')

      // Barcode
      // var code = '11010011001001010110010110110010101010101101010101101';

      // var table = $('#barcodes tbody');
      // table.empty(); // Clear existing barcode

      // for (var i = 0; i < code.length; i++) {
      //     var cell = $('<td></td>');
      //     cell.css('background-color', code[i] === '1' ? 'black' : 'white');
      //     table.append(cell);


        }
      }
  
      

      
  /*
  Copyright (c) [2023] [LaflareSzn]
  All rights reserved.

  This file is part of [Your Project].

  [Your Project] is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  [Your Project] is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with [Your Project].  If not, see <https://www.gnu.org/licenses/>.
*/

  
        })
      })

// document.addEventListener("DOMContentLoaded", function () {
//   // Function to show the searchForTrains section
//   function showSearchForTrains() {
//     document.querySelector("#searchForTrains").style.display = "block";
//     document.querySelector("#availableTrains").style.display = "none";
//     document.querySelector("#selectClass").style.display = "none";
//     document.querySelector("#yourTicket").style.display = "none";
//   }

//   // Show searchForTrains initially
//   showSearchForTrains();

//   // When the user clicks the "Search for Trains" button
//   document.querySelector("#searchBtn").addEventListener("click", function () {
//     // Add your existing logic for validating input here

//     // Display the availableTrains section
//     document.querySelector("#searchForTrains").style.display = "none";
//     document.querySelector("#availableTrains").style.display = "block";
//   });

//   // When the user clicks the "Book Now" button in availableTrains section
//   document.querySelector(".bookTrain").addEventListener("click", function () {
//     // Add your logic for processing the selected train here

//     // Display the selectClass section
//     document.querySelector("#availableTrains").style.display = "none";
//     document.querySelector("#selectClass").style.display = "block";
//   });

//   // When the user clicks the "Book Now" button in selectClass section
//   document.querySelector(".bookClass").addEventListener("click", function () {
//     // Add your logic for processing the selected class here

//     // Display the yourTicket section
//     document.querySelector("#selectClass").style.display = "none";
//     document.querySelector("#yourTicket").style.display = "block";
//   });

//   // When the user clicks the "Cancel" button
//   document.querySelector(".cancelBook").addEventListener("click", function () {
//     // Reload the page
//     window.location.reload();
//   });

//   // Additional logic or modifications can be added based on your requirements
// });




// document.addEventListener("DOMContentLoaded", function () {
//   // Function to show the searchForTrains section
//   function showSearchForTrains() {
//     document.querySelector("#searchForTrains").style.display = "block";
//     document.querySelector("#availableTrains").style.display = "none";
//     document.querySelector("#selectClass").style.display = "none";
//     document.querySelector("#yourTicket").style.display = "none";
//   }

//   // Show searchForTrains initially
//   showSearchForTrains();

//   // When the user clicks the "Search for Trains" button
//   document.querySelector("#searchBtn").addEventListener("click", function () {
//     // Add your existing logic for validating input here

//     // Display the availableTrains section
//     document.querySelector("#searchForTrains").style.display = "none";
//     document.querySelector("#availableTrains").style.display = "block";
//   });

//   // When the user clicks the "Book Now" button in availableTrains section
//   document.querySelector(".bookTrain").addEventListener("click", function () {
//     // Add your logic for processing the selected train here

//     // Display the selectClass section
//     document.querySelector("#availableTrains").style.display = "none";
//     document.querySelector("#selectClass").style.display = "block";
//   });

//   // When the user clicks the "Book Now" button in selectClass section
//   document.querySelector(".bookClass").addEventListener("click", function () {
//     // Add your logic for processing the selected class here

//     // Display the yourTicket section
//     document.querySelector("#selectClass").style.display = "none";
//     document.querySelector("#yourTicket").style.display = "block";

//     // Redirect to the next page (you can customize the URL accordingly)
//     window.location.href = "nextPage.html";
//   });

//   // When the user clicks the "Cancel" button
//   document.querySelector(".cancelBook").addEventListener("click", function () {
//     // Reload the page
//     window.location.reload();
//   });

//   // Additional logic or modifications can be added based on your requirements
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let currentStep = 1;

//   function showStep(step) {
//     document.querySelector("#searchForTrains").style.display = step === 1 ? "block" : "none";
//     document.querySelector("#availableTrains").style.display = step === 2 ? "block" : "none";
//     document.querySelector("#selectClass").style.display = step === 3 ? "block" : "none";
//     document.querySelector("#yourTicket").style.display = step === 4 ? "block" : "none";
//   }

//   showStep(currentStep);

//   // When the user clicks the "Search for Trains" button
//   document.querySelector("#searchBtn").addEventListener("click", function () {
//     // Add your existing logic for validating input here

//     // Increment currentStep and show the next step
//     currentStep++;
//     showStep(currentStep);
//   });

//   // When the user clicks the "Book Now" button in availableTrains section
//   document.querySelector(".bookTrain").addEventListener("click", function () {
//     // Add your logic for processing the selected train here

//     // Increment currentStep and show the next step
//     currentStep++;
//     showStep(currentStep);
//   });

//   // When the user clicks the "Book Now" button in selectClass section
//   document.querySelector(".bookClass").addEventListener("click", function () {
//     // Add your logic for processing the selected class here

//     // Increment currentStep and show the next step
//     currentStep++;
//     showStep(currentStep);

//     // Redirect to the next page (you can customize the URL accordingly)
//     window.location.href = "nextPage.html";
//   });

//   // When the user clicks the "Cancel" button
//   document.querySelector(".cancelBook").addEventListener("click", function () {
//     // Reload the page
//     window.location.reload();
//   });

//   // Additional logic or modifications can be added based on your requirements
// });
