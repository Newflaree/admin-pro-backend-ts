import { Request, Response } from 'express';

export const getUser = ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'getUser'
    });

  } catch ( err ) {
    console.log( `${ '[GET-USER.CONTROLLER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: true,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
