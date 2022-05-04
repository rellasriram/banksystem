import {React, useState, useEffect} from 'react'
import axios from 'axios';

export default function Deposit() {

  const [bankList, setBankList] = useState([])
  const [selectedBank, setSelectedBank] = useState("BA_South")

  const [accountList, setAccountList] = useState([])
  const [selectedAccount, setSelectedAccount] = useState("GT_investments")

  const [amount, setAmount] = useState()

  const [username, setUsername] = useState()

  useEffect(() => {

    setUsername(localStorage.getItem("user"))

    async function getData(){
      const res = await fetch(`/api/bank`)
      const data = await res.json()
      setBankList(data)
      console.log("data", data)
    }

    async function getData2(){
      const res = await fetch(`/api/account`)
      const data = await res.json()
      setAccountList(data)
      console.log("data", data)
    }

    getData()
    getData2()
  }, [])

  const onSubmit=async(e)=>{
    e.preventDefault();
    const payload = {selectedBank, selectedAccount, amount, username}
    console.log(payload);
    let data = await axios.post('/api/deposit', payload);
  }

  return (
    <>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={onSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-4 underline block text-md font-bold font-large text-gray-700">To</div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bank
                      </label>
                      <select
                        id="country"
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        {bankList.map((x, i) =>
                          <option key={x}>{x.bankID}</option>
                        )}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Account
                      </label>
                      <select
                        id="country"
                        value={selectedAccount}
                        onChange={(e) => setSelectedAccount(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        {accountList.map((x, i) =>
                          <option key={x}>{x.accountID}</option>
                        )}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        $ Amount
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
