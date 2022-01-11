import React from "react"
import { RightArrowAlt } from "@styled-icons/boxicons-solid/RightArrowAlt"
import PropTypes from "prop-types"
import {
  Card,
  CardItem,
  CardInfo,
  CardTitle,
  CardImage,
  CardRow,
  CardData,
  CardTag,
  CardLeiaMais,
} from "./styles"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const PostItem = ({ data, tag, titulo, fluid, redirect, width, locale }) => {
  return (
    <Card
      to={redirect}
      width={width}
      onClick={e => {
        trackCustomEvent({
          category: "Click Card Post",
          action: "Click",
          label: `POST - ${titulo}`,
          value: 43,
        })
      }}
    >
      <CardItem>
        <CardImage fluid={fluid} />
        <CardInfo>
          <CardRow>
            <CardData>{data}</CardData>
            <CardTag>{tag}</CardTag>
          </CardRow>
          <CardTitle>
            {titulo && titulo.length > 60
              ? titulo.substring(0, 60) + "..."
              : titulo || ""}
          </CardTitle>
          <CardLeiaMais
            to={redirect}
            onClick={e => {
              trackCustomEvent({
                category: "Click Card Post",
                action: "Click",
                label: `POST - ${titulo}`,
                value: 43,
              })
            }}
          >
            {locale === "en" ? "Read more" : "Leia mais"}
            <RightArrowAlt size="20" color="#fb2660" />{" "}
          </CardLeiaMais>
        </CardInfo>
      </CardItem>
    </Card>
  )
}

PostItem.propTypes = {
  data: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  redirect: PropTypes.string,
}

export default PostItem
