import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  LogBox,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";
import {
  ADDCUSTOMER,
  BASE_URL,
  GETALLCUSTOMER,
  logApiRequest,
  logApiResponse,
  MASTERBRANCH,
  MASTERPRODUCT,
  UPDATECUSTOMER
} from "../../network/api";
import axios from "axios";
import CustomAlert from "../../components/Alert";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputDropdown from "../../components/InputDropdown";
import Item from "../../components/item";
import Label from "../../components/Label";
import ListCustomer from "../../components/ListCustomer";
import ModalAlert from "../../components/Modal";

const InputCustomer = ({ navigation }) => {
  const [dataBranch, setDataBranch] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataTenor, setDataTenor] = useState([]);
  const [dataCustomer, setDataCustomer] = useState([]);
  const [collapseBranch, setCollapseBranch] = useState(true);
  const [collapseProduct, setCollapseProduct] = useState(true);
  const [collapseTenor, setcollapseTenor] = useState(true);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [success, setSuccess] = useState();
  const [showModal, setShowModal] = useState(false);
  const [idItem, setIdItem] = useState("");
  const [loading, setLoading] = useState(false);

  // VARIABLE DATA
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [product, setProduct] = useState("");
  const [tenor, setTenor] = useState("");

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getCustomer();
    });
    return unsubscribe;
  }, []);

  useEffect(
    () => {
      getMasterBranch();
      getMasterProduct();
      initialtenor();
      getCustomer();
    },
    [success]
  );

  const getMasterBranch = async () => {
    const param = {
      ENDPOiNT: `${MASTERBRANCH}`,
      PARAMETER_IN: "",
      LOG_ID: "Fachri",
      USR_CRT: "Fachri"
    };
    const res = await logApiRequest(param);
    axios
      .get(`${BASE_URL}${MASTERBRANCH}`)
      .then(async res => {
        console.log(res);
        const data = {
          ENDPOiNT: MASTERBRANCH,
          PARAMETER_IN: "",
          LOG_ID: "fachri",
          USR_CRT: "fachri",
          RESPONSE_CODE: res.data.statusCode,
          RESPONSE_MESSAGE: res.data.status
        };
        const resp = await logApiResponse(data);
        setDataBranch(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getMasterProduct = async () => {
    const param = {
      ENDPOiNT: `${MASTERPRODUCT}`,
      PARAMETER_IN: "",
      LOG_ID: "Fachri",
      USR_CRT: "Fachri"
    };
    const res = await logApiRequest(param);
    axios
      .get(`${BASE_URL}${MASTERPRODUCT}`)
      .then(async res => {
        const data = {
          ENDPOiNT: MASTERPRODUCT,
          PARAMETER_IN: "",
          LOG_ID: "fachri",
          USR_CRT: "fachri",
          RESPONSE_CODE: res.data.statusCode,
          RESPONSE_MESSAGE: res.data.status
        };
        const resp = await logApiResponse(data);
        setDataProduct(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getCustomer = async () => {
    const param = {
      ENDPOiNT: `${GETALLCUSTOMER}`,
      PARAMETER_IN: "",
      LOG_ID: "Fachri",
      USR_CRT: "Fachri"
    };
    const res = await logApiRequest(param);
    axios
      .get(`${BASE_URL}${GETALLCUSTOMER}`)
      .then(async res => {
        const data = {
          ENDPOiNT: GETALLCUSTOMER,
          PARAMETER_IN: "",
          LOG_ID: "fachri",
          USR_CRT: "fachri",
          RESPONSE_CODE: res.data.statusCode,
          RESPONSE_MESSAGE: res.data.status
        };
        const resp = await logApiResponse(data);
        setDataCustomer(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const initialtenor = () => {
    let x = [];
    for (let i = 1; i <= 60; i++) {
      x.push({
        id: i,
        label: i
      });
    }
    setDataTenor(x);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setBranch("");
    setProduct("");
    setTenor("");
  };

  const onSubmit = async () => {
    if (!firstName) {
      Alert.alert("FirstName tidak boleh kosong");
    } else if (!lastName) {
      Alert.alert("LastName tidak boleh kosong");
    } else if (!phone) {
      Alert.alert("PhoneNumber Tidak boleh kosong");
    } else if (!branch) {
      Alert.alert("Branch Tidak boleh kosong");
    } else if (!product) {
      Alert.alert("Proucts Tidak boleh kosong");
    } else if (!tenor) {
      Alert.alert("Tenor Tidak boleh kosong");
    } else {
      setLoading(true);
      const data = {
        FIRST_NAME: firstName,
        LAST_NAME: lastName,
        PHONE_NO: phone,
        BRANCH_ID: branch.id,
        PRODUCT_ID: product.id,
        TENOR_ID: tenor.id
      };
      const param = {
        ENDPOiNT: `${ADDCUSTOMER}`,
        PARAMETER_IN: JSON.stringify(data),
        LOG_ID: "Fachri",
        USR_CRT: "Fachri"
      };
      const res = await logApiRequest(param);
      console.log("data yang dikirm : ", data);
      axios
        .post(`${BASE_URL}${ADDCUSTOMER}`, data)
        .then(async result => {
          setLoading(false);
          if (result.data.statusCode === 200) {
            console.log("Hasil add customer : ", result);
            setSuccess(true);
            setVisibleAlert(true);
            clearForm();
            setTimeout(() => {
              setVisibleAlert(false);
            }, 2000);
            getCustomer();
          } else {
            setSuccess(false);
            setVisibleAlert(true);
            setTimeout(() => {
              setVisibleAlert(false);
            }, 2000);
          }
          const data = {
            ENDPOiNT: ADDCUSTOMER,
            PARAMETER_IN: "",
            LOG_ID: "fachri",
            USR_CRT: "fachri",
            RESPONSE_CODE: res.statusCode,
            RESPONSE_MESSAGE: res.status
          };
          const resp = await logApiResponse(data);
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  const deleteData = async () => {
    setLoading(true);
    const param = {
      ENDPOiNT: `${UPDATECUSTOMER}`,
      PARAMETER_IN: JSON.stringify(idItem),
      LOG_ID: "Fachri",
      USR_CRT: "Fachri"
    };
    const res = await logApiRequest(param);
    axios
      .delete(`${BASE_URL}${UPDATECUSTOMER}/${idItem}`)
      .then(async result => {
        setLoading(false);
        if (result.data.statusCode === 200) {
          console.log("Hasil add customer : ", result);
          setSuccess(true);
          setVisibleAlert(true);
          setTimeout(() => {
            setVisibleAlert(false);
          }, 1000);
          setShowModal(!showModal);
          getCustomer();
        } else {
          setSuccess(false);
          setVisibleAlert(true);
          setTimeout(() => {
            setVisibleAlert(false);
          }, 1000);
          setShowModal(!showModal);
        }
        const data = {
          ENDPOiNT: UPDATECUSTOMER,
          PARAMETER_IN: JSON.stringify(idItem),
          LOG_ID: "fachri",
          USR_CRT: "fachri",
          RESPONSE_CODE: res.statusCode,
          RESPONSE_MESSAGE: res.status
        };
        const resp = await logApiResponse(data);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <Item width={"100%"} justifycenter alignCenter marginTop={20}>
          <Label size={32} bold>
            Form Data Customer
          </Label>
          <Item marginTop={20}>
            <Input
              maxLength={30}
              label={"First Name"}
              onChange={text => setFirstName(text)}
              value={firstName}
            />
            <Input
              maxLength={30}
              label={"Last Name"}
              onChange={text => setLastName(text)}
              value={lastName}
            />
            <Input
              maxLength={13}
              keyboardType={"number"}
              label={"Phone Number"}
              onChange={text => setPhone(text)}
              value={phone}
            />
            <InputDropdown
              onChange={val => setBranch(val)}
              label={branch ? branch.label : "Select Branch"}
              data={dataBranch}
              collapse={collapseBranch}
              onPress={() => setCollapseBranch(!collapseBranch)}
            />
            <InputDropdown
              onChange={val => setProduct(val)}
              label={product ? product.label : "Select Product Name"}
              data={dataProduct}
              collapse={collapseProduct}
              onPress={() => setCollapseProduct(!collapseProduct)}
            />
            <InputDropdown
              onChange={val => setTenor(val)}
              label={tenor ? tenor.label : "Select Tenor"}
              data={dataTenor}
              collapse={collapseTenor}
              onPress={() => setcollapseTenor(!collapseTenor)}
            />
          </Item>
          <Item marginTop={20}>
            {loading
              ? <Item
                  height={35}
                  width={250}
                  justifycenter
                  alignCenter
                  borderWidth={1}
                  borderRadius={8}
                  backgroundColor={"lightgreen"}
                >
                  <ActivityIndicator size={"small"} color="white" />
                </Item>
              : <Button
                  height={35}
                  width={250}
                  bg={"lightgreen"}
                  txtColor="black"
                  borderWidth={1}
                  borderRadius={8}
                  label={"Submit"}
                  onPress={() => {
                    onSubmit();
                  }}
                />}
          </Item>
          <Item marginTop={10} marginBottom={50}>
            <Button
              height={35}
              width={250}
              bg={"yellow"}
              txtColor="black"
              borderWidth={1}
              borderRadius={8}
              label={"Clear Form"}
              onPress={() => {
                clearForm();
              }}
            />
          </Item>
          {success
            ? <CustomAlert success={success} visible={visibleAlert} />
            : <CustomAlert success={success} visible={visibleAlert} />}
          <Item height={1} width={330} borderWidth={2} marginVertical={20} />
          <ListCustomer
            navigation={navigation}
            data={dataCustomer}
            onPress={val => {
              setShowModal(!showModal);
              setIdItem(val);
            }}
          />
        </Item>
        <ModalAlert
          loading={loading}
          isvisible={showModal}
          onPress={() => deleteData()}
          onClose={() => {
            setShowModal(!showModal);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InputCustomer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  line: {
    borderWidth: 2,
    width: 330,
    height: 10
  }
});
