import { Request, Response } from 'express';

export const getUsers = ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'getUsers'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-USERS]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: true,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
