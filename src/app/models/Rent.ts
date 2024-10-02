export class Rent{
    constructor( 
        public  id:number,
        public  bookId:number,
        public  clientId:number,
        public  rentDate:Date,
        public  dueDate:Date,
        public  returnDate:Date,
        public  rentAmount:number,
        public  status:string,
        public  penalty:number,
    ){
      
    }
}