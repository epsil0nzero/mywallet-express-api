import { Router } from 'express';
import auth from '../../middleware/auth';


const router = Router();

/**
 * @route   GET api/wallet/balances
 * @desc    Get all user wallet balances
 * @access  Private
 */

router.get('/balances', auth, async (req, res) => {
  try {
    const mockBalanaces = [
      {id: 1, symbol: 'BTC', icon: 'btc', balance: '1'},
      {id: 2, symbol: 'ETH', icon: 'eth', balance: '10'},
      {id: 3, symbol: 'LINK', icon: 'link', balance: '30'},
    ]
    res.json(mockBalanaces);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
