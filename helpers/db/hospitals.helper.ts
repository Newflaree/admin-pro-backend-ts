import { Hospital } from "../../models";

export const hospitalValidation = async ( name: string ) => {
  const capName = name.toUpperCase();
  const hospitalExists = await Hospital.findOne({ name: capName });

  if ( hospitalExists ) {
    throw new Error( 'There is already a hospital with that name' );
  }

  return true;
}
