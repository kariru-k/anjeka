import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-services-details',
  imports: [
    NgForOf
  ],
  standalone: true,
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.css'
})
export class ServicesDetailsComponent implements OnInit {

  hospitalityService!: { id: string; details: { catchyTitle: string; briefDescription: string; explanation1: string; explanation2: string; explanation3: string; explanation4: string; serviceList: string[]; }; };

  constructor(private route: ActivatedRoute) {}

  hospitalityData = [
    {
      id: "Hospitality Management",
      details: {
        catchyTitle: "Our Hospitality Management services are designed to optimize efficiency and achieve excellence.",
        briefDescription: "Operate Efficiently and Effectively",
        explanation1: "Efficiency is about doing things right, minimizing the use of resources to achieve organizational goals. It ensures streamlined operations that save time and cost.",
        explanation2: "Effectiveness is about doing the right thing, selecting and pursuing the right business goals and objectives. This ensures long-term growth and sustainability.",
        explanation3: "Our expertise helps businesses identify gaps in operations, providing tailored strategies to achieve operational excellence.",
        explanation4: "With our guidance, your business can align its resources and processes to meet and exceed customer expectations while optimizing profitability.",
        serviceList: [
          "Pre-Opening for Hotels, Restaurants, Bars, and other facilities",
          "Market Studies and Feasibility Studies",
          "Concept Development",
          "Employee Recruitment",
          "Menu Engineering for Food and Beverage outlets",
          "Customer Service and Feedback Management",
          "Revenue Management for various revenue outlets",
          "Standard Operating Procedures (SOPs) development",
          "Budgeting and Purchasing",
          "Business Planning",
          "SWOT Analysis for strategic insights"
        ]
      }
    },
    {
      id: "Hospitality Training",
      details: {
        catchyTitle: "Empower your workforce with our expert Hospitality Training services.",
        briefDescription: "Empower Your Employees",
        explanation1: "Employees are the backbone of any hospitality business. Skilled and knowledgeable staff can transform customer interactions and create memorable experiences.",
        explanation2: "Our training programs focus on improving essential skills like customer service, culinary techniques, and safety protocols to meet industry standards.",
        explanation3: "We also provide specialized training in areas such as mixology, financial management, and strategic planning to address unique operational needs.",
        explanation4: "By empowering your employees, we help you ensure customer satisfaction, loyalty, and improved business performance.",
        serviceList: [
          "Culinary Skills",
          "Public Relations",
          "Hygiene and Safety",
          "Events Management",
          "Hospitality Marketing",
          "Front Office and Automated Systems",
          "Food and Beverage Service and Cost Control",
          "Bar Techniques and Mixology",
          "Quality Management and Service Quality",
          "Hospitality Human Resource Management",
          "Accounting, Financial, and Strategic Management",
          "Legal Aspects in Hospitality"
        ]
      }
    },
    {
      id: "Hospitality Research",
      details: {
        catchyTitle: "Discover untapped opportunities with our comprehensive Hospitality Research services.",
        briefDescription: "Discover Opportunities",
        explanation1: "Research is the key to identifying opportunities for growth and improvement in the hospitality sector. It helps businesses stay competitive and innovative.",
        explanation2: "We conduct in-depth market research to analyze customer trends, preferences, and competitive landscapes, providing actionable insights.",
        explanation3: "Our organizational research evaluates internal processes and systems to identify inefficiencies and recommend improvements.",
        explanation4: "With credible data analysis and business research, we equip your business with the knowledge to make informed decisions.",
        serviceList: [
          "Data Analysis",
          "Market Research",
          "Business Research",
          "Organizational Research",
          "Research in Hospitality Operations and Management"
        ]
      }
    },
    {
      id: "Hospitality Consultancy",
      details: {
        catchyTitle: "Get expert guidance with our tailored Hospitality Consultancy services.",
        briefDescription: "Get the Right Answers",
        explanation1: "The hospitality industry often faces unique challenges and opportunities requiring strategic solutions. Our consultancy services address these needs effectively.",
        explanation2: "We assist in curriculum development and modern management strategies for hotels, restaurants, and bars to stay ahead in the market.",
        explanation3: "Our consultants explore emerging trends and provide actionable insights to embrace opportunities and tackle challenges head-on.",
        explanation4: "With our expertise, your business can adopt innovative models and maintain sustainable growth in a competitive environment.",
        serviceList: [
          "Curriculum Development",
          "Managing Challenges and Opportunities",
          "Exploring Emerging Trends",
          "Modern Management of Hospitality Facilities",
          "Comprehensive Consulting for Hotels, Restaurants, and Bars"
        ]
      }
    }
  ];


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.hospitalityData.forEach(service => {
        if (service.id === decodeURIComponent(<string>params.get('id'))) {
          this.hospitalityService = service;
        }
      });
    });
  }
}
