import { Request, Response } from 'express';
// Models
import { Doctor, Hospital, User } from '../../models';

export const totalSearch = async ( req: Request, res: Response ) => {
  const { term } = req.params;
  const regex = new RegExp( term, 'i' );

  try {
    const [ users, doctors, hospitals ] = await Promise.all([
      User.find({ name: regex, status: true }),
      Doctor.find({ name: regex, status: true }),
      Hospital.find({ name: regex, status: true }),
    ]);


    res.status( 200 ).json({
      ok: true,
      doctors,
      hospitals,
      users
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.TOTAL-SEARCH]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}