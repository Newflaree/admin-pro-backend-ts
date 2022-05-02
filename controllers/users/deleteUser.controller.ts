import { Request, Response } from 'express';

export const deleteUser = ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'deleteUser'
    });

  } catch ( err ) {
    console.log( `${ '[DELETE-USER.CONTROLLER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: true,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
