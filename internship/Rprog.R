
file_create= function(file_name){
  file.create(file_name)
}
file.create("Rprog.R")

readData <- function() {
  df <- data.frame(Names= c(), collegeId = c(), Address= c())
  while(TRUE) {
    Names <- readline(prompt="Enter studentName: ")
    
    if (Names == '')
      break
    collegeId <- as.integer(readline(prompt="Enter collegeId: "))
    Address <- readline(prompt="Enter your Address: ")
    # add the read data to the bottom of the dataframe
    df <- rbind(df, data.frame(Name = c(Names), collegeId = c(collegeId), Address = c(Address)))
  }
  
  # now call the function, it will allow inputs until an empty college is typed
  df
}
readData()


readlines <- function(...){
  lapply(list(...), readline)
}
  readlines(" Enter Username: ","Enter collegeId: ","Enter dept: ")
  
  
add_record<-function(){
  write.table(list1, file = "Rprog.R")
}
add_record(readline(prompt = "Enter phNo: "))

read_record <- function() {
  Rprog <- read.table(file = "Rprog", header = TRUE, sep = ",")
  return(Rprog)
}
new_record=read_record()
print(Rprog)


