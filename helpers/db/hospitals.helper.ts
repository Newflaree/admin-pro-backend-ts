import { Hospital } from "../../models";

export const hospitalValidation = async ( name: string ) => {
  const capName = name.toUpperCase();
  const hospitalExists = await Hospital.findOne({ name: capName });

  if ( hospitalExists ) {
    throw new Error( 'There is already a hospital with that name' );
  }

  return true;
}

export const hospitalIdValidation = async ( id: string ) => {
  const hospitalExists = await Hospital.findById( id );
  
  if ( !hospitalExists || !hospitalExists.status ) {
    throw new Error( 'There is no hospital with that id' );
  }
  
  return true;
}
