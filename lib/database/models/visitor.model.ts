import { Document, Schema, model, models } from "mongoose";

export interface IVisitor extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    startDateTime: Date;
    endDateTime: Date;
    url?: string;
    category: {_id: string , name: string};
    employee: {_id: string , firstName: string , lastName: string};
}

const VisitorSchema = new Schema ({
    title: {type: String , required: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type: Date , default: Date.now},
    startDateTime: {type: Date , default: Date.now},
    endDateTime: {type: Date , default: Date.now},
    url: {type: String},
    category: {type: Schema.Types.ObjectId , ref:'Category'},
    employee: {type: Schema.Types.ObjectId , ref:'User'},
})

const Visitor = models.Visitor || model('Visitor' , VisitorSchema);

export default Visitor