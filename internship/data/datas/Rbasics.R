#file creation
file.create("datas.txt")

list1=data.frame( collegeID=c(21120029,21120066,21120033,21120098,21120054,21120037),username= c("anu", "adlin", "michael","vicky", "teenu", "andrea"),
                   password= c( "11efgh", "15yth","tyu10","gu10yk","uhjk23","gjj32" ) )
print(list1)

file.exists("datas")

a=data.frame(collegeID=c("21120003"),username=c("hary"),password=c("3xcvb"))
#Adding two dataframe
rbind(list1,a)
#Using Get() function
get("list1")

list.files()
#Creating Directory
dir.create("Rlang1")
list.files() 
#Extracting second row
list1[2,]
#Extracting clgID
list1$collegeID
write.table(list1)



                                   