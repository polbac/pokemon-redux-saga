import React from 'react'
import { RingLoader } from 'react-spinners'

export default () => (
    <RingLoader
          css={{
              margin: 'auto',
              marginTop: 100,
          }}
          sizeUnit={"px"}
          size={150}
          color={'blue'}
          loading={true}
        />
)