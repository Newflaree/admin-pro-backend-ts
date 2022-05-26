
import { Request, Response } from 'express';
// Models
import { Doctor, Hospital, User } from '../../models';

/*
  PATH: '/api/searches/:collection/:term'
  DOC: 
*/
export const collectionSearch = async ( req: Request, res: Response ) => {
  const { from = 0, limit = 5 } = req.query;
  const { collection } = req.params;
  const { term } = req.params;
  const regex = new RegExp( term, 'i' );
  const condition = {
    name: regex,
    status: true
  };

  try {
    switch ( collection ) {
      case 'doctors':
        const [ totalD, doctors ] = await Promise.all([
          Doctor.countDocuments( condition ),
          Doctor.find( condition )
            .populate( 'user', 'name img' )
            .populate( 'hospital', 'name img' )
            .skip( Number( from ) )
            .limit( Number( limit ) )
        ]);
        
        return res.status( 200 ).json({
          ok: true,
          total: totalD,
          doctors
        });
        
      case 'hospitals':
        const [ totalH, hospitals ] = await Promise.all([
          Hospital.countDocuments( condition ),
          Hospital.find( condition )
            .populate( 'user', 'name img' )
            .skip( Number( from ) )
            .limit( Number( limit ) )
        ]);
        
        return res.status( 200 ).json({
          ok: true,
          total: totalH,
          hospitals
        });
        
      case 'users':
        const [ totalU, users ] = await Promise.all([
          User.countDocuments( condition ),
          User.find( condition )
            .skip( Number( from ) )
            .limit( Number( limit ) )
        ]);
        
        return res.status( 200 ).json({
          ok: true,
          total: totalU,
          users
        });
        
      default:
        return res.status( 400 ).json({
          ok: false,
          msg: 'Collection not allowed'
        });
    }
  } catch ( err ) {
    console.log( `${ '[CONTROLLER.COLLECTION-SEARCH]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
