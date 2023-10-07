import React from 'react'
import Comments from './Comments'
import pic1 from "../../assets/profilePic1.webp"
import pic2 from "../../assets/profilePic2.webp"

export default function CommentList() {
  return (
    <section className='flex flex-row flex-wrap lg:flex-nowrap py-24 bg-[#9F8776] '>
      				{/*Comments*/}
        <Comments link={pic1} name='Tuğçe Uzun' line='Mobilya ürünlerinizin kalitesi ve hizmetiniz gerçekten beni memnun etti.' point='9.6' comment1='Ürün seçim sürecinden başlayarak, siparişin düzenlenmesi ve teslimatına kadar her aşamada profesyonel ve özenli bir yaklaşım sergilediğiniz için teşekkür ederim. Ürünler, beklentilerimi aşan bir şekilde zamanında teslim edildi ve kusursuz bir şekilde monte edildi.' comment2='Müşteri hizmetlerinizin cana yakın ve yardımsever tutumu da takdire şayan. Sorularıma ve isteklerime sabırla ve hızlı bir şekilde yanıt verdiğiniz için teşekkür ederim.' />
        <Comments link={pic2} name='Fatih Tunç' line='Teslimat ekibinizin hızlı ve düzenli çalışması takdire şayan.' point='9.2' comment1='Ürünlerimiz zamanında ve hasarsız bir şekilde evimize ulaştı. Montaj konusunda da profesyonel bir şekilde hizmet aldık ve bu da bizi çok mutlu etti.' comment2='Sizlerin müşteri memnuniyetine olan özeniniz, gerçekten fark yaratıyor. Bundan sonra ihtiyaç duyduğumuzda ilk akla gelecek olan Tuğrul Mobilya olacak.' />
    </section>
  )
}
