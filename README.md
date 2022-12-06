# Requirements

- [x] **A form containg**:

  - [x] A first field which is the name of the shipping line.

  - [x] A button that should let you add a new 4 fields which are the country data ( name, cost,minDays,maxDays ).
  
  - [x] A button to submit the data.

- [x] **Important:** Every shipping line can have at **least 1 country** &  **all the fields are required**.

- [x] **Output:**

```JSON

{ 
    "name": "shipping line 1",
    "countries":{
        "Tunisia":{
            "cost": 10, 
            "minDays": 2,
            "maxDays": 5   
        },
        "Egypt":{
            "cost": 10, 
            "minDays": 3, 
            "maxDays": 12
        },
    }
}

```
