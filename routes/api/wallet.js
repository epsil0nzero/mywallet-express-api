import { Router } from 'express';
import auth from '../../middleware/auth';


const router = Router();

const mockBalanaces = [
  {id: 1, symbol: 'BTC', icon: 'btc', total: '1', available: '1', locked: '0', btc_value: '0.1', address: 'btc_test_address'},
  {id: 2, symbol: 'ETH', icon: 'eth', total: '10', available: '10', locked: '0', btc_value: '0.1', address: 'eth_test_address'},
  {id: 3, symbol: 'LINK', icon: 'link', total: '30', available: '30', locked: '0', btc_value: '0.1', address: 'link_test_address'},
];

/**
 * @route   GET api/wallet/balances
 * @desc    Get all user wallet balances
 * @access  Private
 */
router.get('/balances', auth, async (req, res) => {
  try {    
    res.json(mockBalanaces);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});


/**
 * @route   GET api/wallet/deposit
 * @desc    Get deposit info
 * @access  Private
 */
router.get('/deposit', auth, async (req, res) => {
  try {
    const filtered = mockBalanaces.filter(item => item.id == req.query.cid);
    if(filtered.length === 1) {
      return res.json(filtered[0]);
    } else {
      return res.status(400).json({ msg: 'invalid cid' });
    }    
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});


/**
 * @route   GET api/wallet/withdraw
 * @desc    Get withdraw info
 * @access  Private
 */
router.get('/withdraw', auth, async (req, res) => {
  try {
    const filtered = mockBalanaces.filter(item => item.id == req.query.cid);
    if(filtered.length === 1) {
      return res.json(filtered[0]);
    } else {
      return res.status(400).json({ msg: 'invalid cid' });
    }
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

export default router;
