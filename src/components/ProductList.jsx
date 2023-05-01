
//import products from "../json/products.json"
import ProductItem from "./ProductItem";
import { Row, Col } from "antd";
export default function ProducList({products, isLoading}) {
  return (
    <div>
      <div className="image__layout">
        <h1 className="text-center">IMAGES</h1>
        <hr className="divider--dark" />
        <Row gutter={[32, 32]}>

          {products.map(product => (
            <Col
              
              sm={{ span: 12 }}
              lg={{ span: 6 }}
            >
              <ProductItem  key={product.id} product={product} />
            </Col>
          ))}

        </Row>
      </div>
      <article className="description__layout">

        <h1>DESCRIPTIONS</h1>
        <hr className="divider--light" />
        <p className="description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
          corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
          unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
          ullam
          eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
          quod
          quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
          dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
          tempora.
          Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
          repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
      </article>
    </div>
  );
}