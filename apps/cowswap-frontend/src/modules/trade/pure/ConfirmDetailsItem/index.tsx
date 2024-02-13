import { ReactNode } from 'react'

import { RowFixed } from '@cowprotocol/ui'

import { CornerDownRight } from 'react-feather'
import { Text } from 'rebass'

import { InfoIcon } from 'legacy/components/InfoIcon'

import { TimelineDot } from 'modules/trade/pure/Row/styled'

import { Content, Row, Wrapper } from './styled'

export type ConfirmDetailsItemProps = {
  children: ReactNode
  label?: ReactNode
  tooltip?: ReactNode
  withArrow?: boolean
  fiatAmount?: string
  withTimelineDot?: boolean
  highlighted?: boolean
}

export function ConfirmDetailsItem(props: ConfirmDetailsItemProps) {
  const { children, label, tooltip, withArrow = false, withTimelineDot = false } = props

  return (
    <Wrapper>
      {withArrow && <CornerDownRight size={14} />}
      {withTimelineDot && <TimelineDot />}

      {label ? (
        <Row>
          <RowFixed>
            {label && <Text>{label}</Text>}
            {tooltip && <InfoIcon content={tooltip} />}
          </RowFixed>

          <Content>{children}</Content>
        </Row>
      ) : (
        children
      )}
    </Wrapper>
  )
}
