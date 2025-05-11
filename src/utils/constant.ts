import { image } from "framer-motion/client";

const SCROLL_THRESHOLD = 56;

const HEADER_ITEM = {
    about: {
        text: 'Về chúng tôi',
        id: 'about',
        link: '/#about',
    },
    product: {
        text: 'Sản phẩm',
        id: 'product',
        link: '#product',
    },
    techstack: {
        text: 'Công nghệ',
        id: 'techstack',
        link: '#techstack',
    }
}

const HEADER_MENU = [
    {
        text: 'Trang chủ',
        link: '/'
    },
    HEADER_ITEM.about,
    HEADER_ITEM.product,
    HEADER_ITEM.techstack
]

const INFO = {
    companyName: 'EGO'
}

const PRODUCTS = [
    {
        code: 'vietgoal',
        name: 'Hệ thống quản lý Vietgoal',
        techstacks: ['C#', 'Mongodb', 'Angular', 'Antd'],
        shortDescription: 'Hệ thống quản lý Vietgoal, Hệ thống quản lý Vietgoal, Hệ thống quản lý Vietgoal, Hệ thống quản lý Vietgoal, Hệ thống quản lý Vietgoal, Hệ thống quản lý Vietgoal, Hệ thống quản lý Vietgoal',
        seoTitle: 'Hệ thống quản lý Vietgoal',
        seoDescription: 'Mô tả hệ thống quản lý Vietgoal',
        projectLead: {
            title: 'Chia sẻ từ Project Leader',
            image: 'https://res.ivivu.com/hotelclient/img/logo/logo-goc-ivv.svg',
            name: 'John Sena',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia totam eos commodi, laborum animi doloribus, officia officiis veritatis alias vel, ut earum sapiente praesentium. Alias sunt corporis dolores eligendi ipsum.'
        },
        content: {
            image: 'https://tgl-sol.com/images/ai/4_2.jpg',
            graphs: [
                {
                    title: '1. VẤN ĐỀ & BỐI CẢNH:',
                    description: 'Hiện nay, các nhà đầu tư và nhà sản xuất dành rất nhiều thời gian, công sức và tiền bạc cho quá trình lắp đặt/chế tạo. Khi lắp đặt nhà máy, nếu tính toán sai hoặc không kiểm soát được hết các tình huống phát sinh thì chi phí và thời gian dành cho vấn đề này sẽ tăng lên rất nhiều.'
                },
                {
                    title: '2. TÍNH NĂNG & GIẢI PHÁP:',
                    description: 'Mục tiêu của Digital Twin là mô phỏng thế giới thật với đầy đủ phương thức vận hành, dự đoán rủi ro của sản phẩm hoặc quy trình sản xuất, do đó giảm phần lớn thời gian dành cho cài đặt/sản xuất. Tiết kiệm chi phí thông qua việc tham quan thế giới ảo'
                }
            ]
        }
    }
]

const CONSTANT = {
    SCROLL_THRESHOLD, HEADER_ITEM, HEADER_MENU, INFO, PRODUCTS
}

export default CONSTANT;