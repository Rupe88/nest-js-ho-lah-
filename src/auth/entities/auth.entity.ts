import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()

//user class inherits document so that each instances treated as a full mongodb doocument
export class User extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const userSchema = SchemaFactory.createForClass(User);
