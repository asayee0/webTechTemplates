def getMostValuable(customers):
       mostValuable = 0
       for key in customers:
              if(key["products"]["value"] > mostValuable):
                     mostValuable = key["products"]["value"]
                     mostValuablePos = key
       return mostValuablePos

#Question 2
def addCustomer(customers, newCustomer):
       i = 0
       for key in customers:
              if(newCustomer["name"] < key["name"]):
                     customers.insert(i, newCustomer)
                     break
              i += 1
       return customers

#Question 3
def getBySex(customers, sex):
       arr = []
       if (sex == "male"): 
              sex = "m"
       elif (sex == "female"): 
              sex = "f"

       if (sex != "m" and sex != "f"): 
              return "Invalid parameter"

       for key in customers:
              if(key["sex"] == sex): 
                     arr.append(key)
       return arr

#Question 4
def getCustomerWhoBought(customers, product):
       arr = []
       for key in customers:
              if(key["products"]["name"] == product):
                     arr.append(key)
       return arr

#Question 5
def convertDate(dates):
       import re, datetime
       regex = "(\d\d\d\d)\-(\d\d)\-(\d\d)"
       arr = []
       
       for d in dates:
              searchObj = re.search(regex, d)       
              if(searchObj != None):
                     newDate = datetime.datetime(
                            int(searchObj.group(1)), 
                            int(searchObj.group(2)), 
                            int(searchObj.group(3)))
                     arr.append(newDate)

       return arr

#Question 6
def convertProductDates(customers):
       arr = []
       for key in customers:
              arr.append(key["products"]["date"])
       return convertDate(arr)