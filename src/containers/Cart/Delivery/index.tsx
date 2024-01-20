import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../../store'

import Payment from '../Payment'
import Button from '../../../components/Button'
import * as S from '../styles'

type DeliveryProps = {
  handleClick: () => void
}

const Delivery = ({ handleClick }: DeliveryProps) => {
  const [finalizePayment, setFinalizePayment] = useState(false)

  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryDataProps>({
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  })

  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: { ...deliveryInfo },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O nome precisa ter pelo menos 8 caracteres')
        .max(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      setDeliveryInfo(values)
    }
  })

  const checkInputHasError = (fiedlName: string) => {
    const isTouched = fiedlName in form.touched
    const isInvalid = fiedlName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      {!finalizePayment ? (
        <S.Sidebar>
          <S.SubTitle>Entrega</S.SubTitle>
          <form onSubmit={form.handleSubmit}>
            <S.FormContainer>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={form.values.address.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('description') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.address.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputContainer>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.address.zipCode}
                    onChange={form.handleChange}
                    mask="99999-999"
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={form.values.address.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.InputContainer>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.address.complement}
                  onChange={form.handleChange}
                />
              </S.InputGroup>
              <Button
                placeholder="Continuar com o pagamento"
                displayMode="fullWidth"
                themeMode="second"
                kind="button"
                type="submit"
                onClick={() => setFinalizePayment(true)}
              />
            </S.FormContainer>
          </form>

          <Button
            placeholder="Voltar para o carrinho"
            displayMode="fullWidth"
            themeMode="second"
            kind="button"
            onClick={handleClick}
          />
        </S.Sidebar>
      ) : (
        <Payment
          deliveryInfo={deliveryInfo}
          productItems={items}
          handleClick={() => setFinalizePayment(false)}
        />
      )}
    </>
  )
}

export default Delivery
