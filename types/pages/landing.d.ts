// 从其他文件导入区块类型定义
import { Header } from "@/types/blocks/header";
import { Hero } from "@/types/blocks/hero";
import { Section } from "@/types/blocks/section";
import { Footer } from "@/types/blocks/footer";
import { ReceiptSection } from "@/types/blocks/receipt";

// 定义登录页面的完整结构
export interface LandingPage {
  header?: Header; // 页面头部,全是可选的！
  hero?: Hero; // 主视觉区域
  branding?: Section; // 品牌展示区
  introduce?: Section; // 介绍区域
  benefit?: Section; // 优势展示
  usage?: Section; // 使用说明
  feature?: Section; // 功能特点
  showcase?: Section; // 展示区域
  stats?: Section; // 数据统计
  pricing?: Pricing; // 价格方案
  testimonial?: Section; // 用户评价
  faq?: Section; // 常见问题
  cta?: Section; // 行动召唤
  footer?: Footer; // 页面底部
  receipt?: ReceiptSection; // 收据生成器
}
