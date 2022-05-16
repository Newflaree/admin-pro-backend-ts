import { Request, Response } from 'express';

export const updateUser = ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'updateUser'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-USER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: true,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
