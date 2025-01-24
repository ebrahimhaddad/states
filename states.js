listOfStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
      "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
      "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "NewHampshire", 
      "NewJersey", "NewMexico", "NewYork", "NorthCarolina", "NorthDakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
      "RhodeIsland", "SouthCarolina", "SouthDakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
      "WestVirginia", "Wisconsin", "Wyoming"];
    companies =['Walgreens Company', 'CVS Health', 'Walmart', 'Rite Aid Corp', 'Kroger Company', 'Albertsons Inc'
    , 'AmerisourceBergen Corporation', 'Publix Super Markets Inc', 'McKesson Corp', 'Costco Wholesale Corp', 'Cardinal Health Inc'
    , 'H E B Grocery Company', 'Meijer Great Lakes Limited Partnership', 'Southeastern Grocers LLC', 'Hy Vee Inc', 'Kaiser Permanente'
    , 'Pharmerica Corp', 'Giant Eagle Inc', 'Ahold Delhaize America', 'Wegmans Food Markets Inc', 'Kinney Drugs Inc'];
    compState =['All 50 states', 'All 50 states', 'All 50 states'
    , 'Philadelphia, Pennsylvania, NewYork, Ohio, Michigan'
    , 'Alaska, Arizona, Arkansas, California, Colorado, Delaware, Florida, Georgia, Idaho, Illinois, Indiana, Kansas, Kentucky, Louisiana, Maryland, Michigan, Mississippi, Missouri, Montana, Nebraska, Nevada, NewMexico, NorthCarolina, Ohio, Oregon, SouthCarolina, Tennessee, Texas, Utah, Virginia, Washington, WestVirginia, Wisconsin, Wyoming'
    , 'California, Idaho, Montana, Nevada, NorthDakota, Oregon, Utah, Washington, Wyoming'
    , 'All 50 states'
    , 'Alabama, Florida, Georgia, NorthCarolina, SouthCarolina, Tennessee, Virginia, Kentucky'
    , 'All 50 states'
    , 'Florida, Texas, Minnesota, Arizona, California, Colorado, Georgia, Illinois, NewJersey, Nevada, Washington'
    , 'All 50 states'
    , 'Texas'
    , 'Michigan, Ohio, Indiana, Illinois, Kentucky, Wisconsin'
    , 'Alabama, Florida, Georgia, Louisiana, Mississippi'
    , 'Iowa, Illinois, Kansas, Minnesota, Missouri, Nebraska, SouthDakota, Wisconsin'
    , 'California, Colorado, Georgia, Hawaii, Maryland, Oregon, Virginia, Washington'
    , 'Alabama, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, NewHampshire, NewJersey, NewMexico, NewYork, NorthCarolina, Ohio, Oklahoma, Oregon, Pennsylvania, RhodeIsland, SouthCarolina, SouthDakota, Tennessee, Texas, Utah, Virginia, Washington, WestVirginia, Wisconsin'
    , 'Pennsylvania, Ohio, WestVirginia, Indiana, Maryland'
    , 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Georgia, Idaho, Illinois, Indiana, Kansas, Kentucky, Louisiana, Maryland, Michigan, Mississippi, Missouri, Montana, Nebraska, Nevada, NewJersey, NewMexico, NorthCarolina, Ohio, Oregon, Pennsylvania, SouthCarolina, Tennessee, Texas, Utah, Virginia, Washington, WestVirginia'
    , 'Delaware, Colorado, Massachusetts, Maryland, NewJersey, NewYork, NorthCarolina, Pennsylvania, Virginia'
    , 'NewYork, Vermont'];

      turnOff();
      
      function turnOff(){
        for(i=0; i<=49; i++)
            document.getElementById(listOfStates[i]).style.visibility = "hidden";
      }
      function show(inn){
        turnOff();
        a="";
        for(i=0; i<=20; i++){
            if(companies[i]==inn){
                a = compState[i];
            }
        }
        for(i=0; i<=49; i++){
        if(a == 'All 50 states' || a.search(listOfStates[i]) > -1) document.getElementById(listOfStates[i]).style.visibility = "visible";
        }
      }
