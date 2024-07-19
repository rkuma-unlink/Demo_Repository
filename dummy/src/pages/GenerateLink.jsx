import React, { useEffect, useState } from "react";
import Heading from "../components/heading/Heading";
import InputField from "../components/form-fields/InputField";
import Button from "../components/buttons/Button";
import BasicDatePicker from "../components/form-fields/BasicDatePicker";
import BasicSelect from "../components/form-fields/BasicSelect";

import Loader from "../components/loader/Loader";
import Toast from "../components/toast/Toast";
import dayjs from "dayjs";
import BasicToggle from "../components/form-fields/BasicToggle";
import Card from "../components/card/Card";
import {
  AutoMode,
  CopyAllRounded,
  DoubleArrow,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Buffer } from "buffer";

const GenerateLink = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialState = {
    return_url: {
      webhook_url: "",
      success_url: "",
      decline_url: "",
    },
    amount: 0,
    currency: "JPY",
    merchant_id: "JP00000517",
    merchant_email: "kavi@ghunowa.com",
    merchant_txn_ref: "2003089893366DTEST",
    billing_address: {
      email: "abhilash.sharma@unlink-technologies.com",
      phone: "8580738436",
      address1: "sector 135",
      city: "NOIDA",
      state: "UP",
      country: "INDIA",
    },
    shipping_address: {
      email: "abhilash.sharma@unlink-technologies.com",
      phone: "8580738436",
      address1: "sector 135",
      city: "NOIDA",
      state: "UP",
      country: "INDIA",
    },
  };
  const [form, setForm] = useState(initialState);
  const [selectedDiv, setSelectedDiv] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hppURL, setHppURL] = useState("");
  const [enterManually, setEnterManually] = useState(false);
  const [enterManuallyFew, setEnterManuallyFew] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showEncodeButton, setShowEncodeButton] = useState(true);
  const [liveApiKey, setLiveApiKey] = useState(
    Buffer.from(`${process.env.REACT_APP_IBM_KEY}`).toString(
      "base64"
    )
  );
  const handleChange = (name, value, title) => {
    console.log(name, value);
    const newForm = form;

    if (title) {
      setForm({
        ...newForm,
        [title]: { ...newForm[title], [name]: value },
      });
    } else {
      setForm({
        ...newForm,
        [name]: value,
      });
    }
  };

  const columnWidth = { two: "48%", three: "32%", four: "23%" };
  const columns = columnWidth.four;
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [hideBillingAddress, setHideBillingAddress] = useState(true);
  const [hideShippingAddress, setHideShippingAddress] = useState(true);
  const [hideReturnURLs, setHideReturnURLs] = useState(true);
  const FormItems = [
    {
      toggle: true,
      onToggleClick: () => {
        setHideReturnURLs(!hideReturnURLs);
      },
      toggleChecked: hideReturnURLs,
      label: "Hide Return URLs",
    },
    {
      toggle: true,
      onToggleClick: () => {
        setHideBillingAddress(!hideBillingAddress);
      },
      toggleChecked: hideBillingAddress,
      label: "Hide Billing Address",
    },
    {
      toggle: true,
      onToggleClick: () => {
        setHideShippingAddress(!hideShippingAddress);
      },
      toggleChecked: hideShippingAddress,
      label: "Same As Billing Address",
    },
    {
      titleLabel: "Return URLs",
      hide: hideReturnURLs,
    },
    {
      title: "return_url",
      name: "webhook_url",
      placeholder: "Webhook Url",
      label: "Webhook Url",
      value: form.return_url.webhook_url,
      required: false,
      hide: hideReturnURLs,
    },
    {
      title: "return_url",
      name: "success_url",
      placeholder: "Success Url",
      label: "Success Url",
      value: form.return_url.success_url,
      required: false,
      hide: hideReturnURLs,
    },
    {
      title: "return_url",
      name: "decline_url",
      placeholder: "Decline Url",
      label: "Decline Url",
      value: form.return_url.decline_url,
      required: false,
      hide: hideReturnURLs,
    },
    {
      titleLabel: "Details",
    },

    {
      name: "amount",
      placeholder: "Amount",
      label: "Amount",
      value: form.amount,
      required: false,
    },

    {
      required: false,
      name: "currency",
      label: "Currency",
      options: [
        { label: "JPY", value: "JPY" },
        { label: "SGD", value: "SGD" },
        { label: "USD", value: "USD" },
      ],
      select: true,
      defaultValue: "JPY",
    },
    {
      name: "merchant_id",
      placeholder: "Merchant Id",
      label: "Merchant Id",
      value: form.merchant_id,
      required: false,
    },
    {
      name: "merchant_email",
      placeholder: "Merchant Email",
      label: "Merchant Email",
      value: form.merchant_email,
      required: false,
    },
    {
      name: "merchant_txn_ref",
      placeholder: "Merchant Txn Ref",
      label: "Merchant Txn Ref",
      value: form.merchant_txn_ref,
      required: false,
    },

    // address Fields

    {
      titleLabel: "Billing Address",
      hide: hideBillingAddress,
    },
    {
      title: "billing_address",
      name: "email",
      placeholder: "Email",
      label: "Email",
      value: form.billing_address.email,
      required: false,
      hide: hideBillingAddress,
    },
    {
      title: "billing_address",
      name: "phone",
      placeholder: "Phone",
      label: "Phone",
      value: form.billing_address.phone,
      required: false,
      hide: hideBillingAddress,
    },
    {
      title: "billing_address",
      name: "address1",
      placeholder: "Address",
      label: "Address",
      value: form.billing_address.address1,
      required: false,
      hide: hideBillingAddress,
    },
    {
      title: "billing_address",
      name: "city",
      placeholder: "City",
      label: "City",
      value: form.billing_address.city,
      required: false,
      hide: hideBillingAddress,
    },
    {
      title: "billing_address",
      name: "state",
      placeholder: "State",
      label: "State",
      value: form.billing_address.state,
      required: false,
      hide: hideBillingAddress,
    },
    {
      title: "billing_address",
      name: "country",
      placeholder: "Country",
      label: "Country",
      value: form.billing_address.country,
      required: false,
      hide: hideBillingAddress,
    },
    // another address

    {
      titleLabel: "Shipping Address",
      hide: hideShippingAddress,
    },
    {
      title: "shipping_address",
      name: "email",
      placeholder: "Email",
      label: "Email",
      value: form.shipping_address.email,
      required: false,
      hide: hideShippingAddress,
    },
    {
      title: "shipping_address",
      name: "phone",
      placeholder: "Phone",
      label: "Phone",
      value: form.shipping_address.phone,
      required: false,
      hide: hideShippingAddress,
    },
    {
      title: "shipping_address",
      name: "address1",
      placeholder: "Address",
      label: "Address",
      value: form.shipping_address.address1,
      required: false,
      hide: hideShippingAddress,
    },
    {
      title: "shipping_address",
      name: "city",
      placeholder: "City",
      label: "City",
      value: form.shipping_address.city,
      required: false,
      hide: hideShippingAddress,
    },
    {
      title: "shipping_address",
      name: "state",
      placeholder: "State",
      label: "State",
      value: form.shipping_address.state,
      required: false,
      hide: hideShippingAddress,
    },
    {
      title: "shipping_address",
      name: "country",
      placeholder: "Country",
      label: "Country",
      value: form.shipping_address.country,
      required: false,
      hide: hideShippingAddress,
    },
  ];
  const getSlug = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(process.env.REACT_APP_BASE_URL, {
        method: "POST",
        headers: {
          "x-api-key": process.env.REACT_APP_X_SECRET_KEY,
          Authorization: `Basic ${atob(liveApiKey)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res, "rese");
          if (res.statusCode > 400) {
            setShowToast(true);
            setType("error");
            setMessage("Sorry Something Went Wrong!!");
            setTimeout(() => {
              setShowToast(false);
              setLoading(false);
            }, 3000);
          } else {
            setShowToast(true);
            setType("success");
            setMessage("Yay Got Your Link!");
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
            setLoading(false);
            setHppURL(res?.url.replace("/jp/", "/"));
            if(res?.url){
              window.open(res?.url.replace("/jp/", "/"));
            }
          }
        });
    } catch (e) {
      // console.log("here");
      setLoading(false);
      setShowToast(true);
      setType("error");
      setMessage("Sorry Something Wrong !!");
      setTimeout(() => {
        setLoading(false);
      }, 3000);

      console.log(e, "error");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    await getSlug(e);
  };

  // to render the page on change of toggle
  useEffect(() => {}, [hideShippingAddress]);
  const TYPES = [
    {
      label: "Non 3DS",
      apiKey: (`${process.env.REACT_APP_IBM_KEY}`),
      merchantID: "JP00000517",
    },
    {
      label: "Wallet Pay",
      apiKey: (`${process.env.REACT_APP_IBM_KEY}`),
      merchantID: "JP00000549",
    },
    {
      label: "3DS",
      apiKey: (`${process.env.REACT_APP_IBM_KEY}`),
      merchantID: "MU00000482",
    },
  ];
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <Loader loading={loading} />
      <Toast
        setShow={setShowToast}
        show={showToast}
        type={type}
        message={message}
      />
      <Heading className="p-4" title="HPP Generate Link" />

      <>
        <div className="px-4">
          <div className="few-details">
            {TYPES.map((item, index) => {
              return (
                <Card
                  index={index}
                  key={index}
                  className={selectedDiv === index ? "selected" : ""}
                  title={item.label}
                  onClick={() => {
                    setForm({ ...form, merchant_id: item.merchantID });
                    setLiveApiKey(Buffer.from(item.apiKey).toString("base64"));
                    setSelectedDiv(index);
                    setShowToast(true);
                    setType("success");
                    setMessage(
                      `Switched To ${item.label}! Please click on Submit to Generate Slug!`
                    );
                  }}
                />
              );
            })}
          </div>
          <BasicToggle
            onClick={() => {
              setEnterManuallyFew(!enterManuallyFew);
            }}
            checked={enterManuallyFew}
            label={"Enter Mannually Few Details"}
          />
          {enterManuallyFew ? (
            <>
              <div>
                <h3 className="label-enter-manually-few">
                  ENTER THESE FOUR AND CLICK SUBMIT !
                </h3>
              </div>
              <div className="few-details">
                <InputField
                  className="enter-amout"
                  label={"ENTER AMOUNT"}
                  value={form.amount}
                  onChange={(name, value) =>
                    setForm({ ...form, amount: value })
                  }
                />
                <BasicSelect
                  className="amount-select enter-amout"
                  name="currency"
                  label="Currency"
                  options={[
                    { label: "JPY", value: "JPY" },
                    { label: "SGD", value: "SGD" },
                    { label: "USD", value: "USD" },
                  ]}
                  select={true}
                  defaultValue="JPY"
                  onChange={handleChange}
                />
                <InputField
                  className="enter-amout"
                  label={"ENTER DAS MID"}
                  value={form.merchant_id}
                  onChange={(name, value) =>
                    setForm({ ...form, merchant_id: value })
                  }
                />
              </div>

              <div style={{ position: "relative" }}>
                <InputField
                  label={"LIVE API KEY"}
                  value={liveApiKey}
                  onChange={(name, value) => setLiveApiKey(value)}
                  type={showApiKey ? "text" : "password"}
                />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    position: "absolute",
                    right: "1rem",
                    top: "2.7rem",
                  }}
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? <Visibility /> : <VisibilityOff />}
                </button>
                {showEncodeButton ? (
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      position: "absolute",
                      right: "4rem",
                      top: "2.7rem",
                    }}
                    onClick={() => {
                      setLiveApiKey(Buffer.from(liveApiKey).toString("base64"));
                      setShowEncodeButton(false);
                    }}
                  >
                    <AutoMode />:
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            <></>
          )}
          <BasicToggle
            onClick={() => {
              setEnterManually(!enterManually);
              setEnterManuallyFew(false);
            }}
            checked={enterManually}
            label={"Enter Mannually All Details"}
          />
        </div>
        {enterManually ? (
          <div className="p-4 form-fields">
            {FormItems.filter((i) => !i.hide).map(
              (
                {
                  name,
                  placeholder,
                  label,
                  value,
                  required,
                  datePicker = false,
                  holidays,
                  select = false,
                  options,
                  defaultValue,
                  title,
                  titleLabel,
                  toggle = false,
                  onToggleClick = () => {},
                  toggleChecked,
                },
                index
              ) => {
                return toggle ? (
                  <div
                    className="form-field"
                    key={index}
                    style={{ width: columns }}
                  >
                    <BasicToggle
                      onClick={onToggleClick}
                      checked={toggleChecked}
                      label={label}
                    />
                  </div>
                ) : titleLabel ? (
                  <div key={index} style={{ width: "100%" }}>
                    <h1>{titleLabel}</h1>
                  </div>
                ) : datePicker ? (
                  <div
                    key={index}
                    style={{ width: columns }}
                    className="form-field"
                  >
                    <BasicDatePicker
                      name={name}
                      placeholder={placeholder}
                      label={label}
                      value={form.birthday}
                      required={false}
                      holidays={holidays}
                      onChange={handleChange}
                      maxDate={dayjs().subtract(18, "year").toDate()}
                    />
                  </div>
                ) : select ? (
                  <div
                    key={index}
                    style={{ width: columns }}
                    className="form-field"
                  >
                    <BasicSelect
                      label={label}
                      options={options}
                      name={name}
                      defaultValue={defaultValue}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <div
                    key={index}
                    style={{ width: columns }}
                    className="form-field"
                  >
                    <InputField
                      key={index}
                      name={name}
                      value={value}
                      label={label}
                      required={required}
                      placeholder={placeholder}
                      onChange={handleChange}
                      title={title}
                    />
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <></>
        )}

        <div className="submit-button">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
        <div style={{ position: "relative" }}>
          <InputField
            className="px-4"
            value={hppURL}
            onChange={(name, value) => {
              setHppURL(value);
            }}
            label={"YOUR SLUG IS"}
          />
          {hppURL && (
            <>
              <CopyAllRounded
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "5rem",
                  top: "3rem",
                  color: "#a555f3",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(hppURL);
                  setShowToast(true);
                  setType("success");
                  setMessage("Coppied !!");
                }}
              />
              <DoubleArrow
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "2rem",
                  top: "3rem",
                  color: "#a555f3",
                }}
                onClick={() => {
                  window.open(hppURL);
                }}
              />  
            </>
          )}
        </div>

        <div className="form-group d-md-flex">
          <div className="w-100 text-md-right"></div>
        </div>
      </>
    </div>
  );
};

export default GenerateLink;
