import React, { useState } from 'react';
import './faucet.css';

const Faucet = () => {
  const [address, setAddress] = useState('');

  const [errMsg, setErrMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [cooldownMsg, setCooldownMsg] = useState(null);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    clearMessages()
    // TODO: Check address validity.
  };

  const createSuccessMessage = (txid) => {
    clearMessages()
    setSuccessMsg(txid)
  }

  const createCooldownMessage = (address) => {
    clearMessages()
    setCooldownMsg(address)
  }

  const createErrorMessage = (msg) => {
    clearMessages()
    setErrMsg(msg)
  }

  const clearMessages = () => {
    setErrMsg(null)
    setSuccessMsg(null)
    setCooldownMsg(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        address: address,
        channel: "scrypt.io"
      })
    }

    fetch('https://witnessonchain.com/v1/faucet/tbsv', requestOptions)
      .then(response => response.json())
      .then(response => {
        if (response.code === 0) {
          createSuccessMessage(response.txid)
        } else if (response.code === 20) {
          createCooldownMessage(address);
        } else {
          createErrorMessage(response.message)
        }
      })

  };

  return (
    <div className="faucet-container">
      <div className="faucet-form-container">
        <h2 className="faucet-form-title">Get testnet BSV from faucet</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="faucet-form-label">
            <input
              type="text"
              value={address}
              placeholder="Recipient Address"
              onChange={handleAddressChange}
              className="faucet-form-input"
            />
          </label>
          <button type="submit" className="faucet-form-button">
            Get BSV
          </button>
        </form>

        {successMsg && (
          <div class="faucet-success">
            <p>Success</p>
            <div>
              BSV transfer succeeded!<br/>
              TXID:<br/>
              <a href={`khttps://test.whatsonchain.com/tx/${successMsg}`} target="_blank">{successMsg}</a>
              </div>
          </div>
        )}
        {errMsg && (
          <div class="faucet-err">
            <p>Error</p>
            <div>{errMsg}</div>
          </div>
        )}
        {cooldownMsg && (
          <div class="faucet-warn">
            <p>Warning</p>
            <div>{cooldownMsg}</div>
          </div>
        )}
      </div>

      <div className="faucets-container">
        <h2 className="faucets-title">Other Faucets</h2>
        <ul className="faucets-list">
          <li className="faucets-item">
            <a
              href="https://witnessonchain.com/faucet/tbsv"
              target="_blank"
              rel="noopener noreferrer"
              className="faucets-link"
            >
              Witnessonchain Faucet
            </a>
          </li>
          <li className="faucets-item">
            <a
              href="https://faucet.bitcoincloud.net"
              target="_blank"
              rel="noopener noreferrer"
              className="faucets-link"
            >
              BSV Testnet Faucet
            </a>
          </li>
          <li className="faucets-item">
            <a
              href="https://testnet.satoshisvision.network"
              target="_blank"
              rel="noopener noreferrer"
              className="faucets-link"
            >
              Satoshis Vision Faucet
            </a>
          </li>
          <li className="faucets-item">
            <a
              href="https://faucet.bitails.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="faucets-link"
            >
              bitails Faucet
            </a>
          </li>
        </ul>
        <div className="faucet-donation-container">
          <span className="faucet-donation-label">Donation address:</span>{' '}
          <span className="faucet-donation-address">
            mnai8LzKea5e3C9qgrBo7JHgpiEnHKMhwR
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faucet;