import { Injectable } from '@angular/core';

export interface BlogPostContent {
  title: string;
  slug: string;
  image: string;
  category: string;
  authorName: string;
  authorAvatar?: string;
  date: string | Date;
  excerpt: string;
  contentHtml: string;
  tags?: string[];
}

@Injectable({ providedIn: 'root' })
export class BlogContentService {
  private readonly posts: BlogPostContent[] = [
    {
      title: 'Service Failure in the Hospitality Industry',
      slug: 'service-failure-in-hospitality',
      image: 'assets/img/img.png',
      category: 'Operations',
      authorName: 'Anjeka Team',
      authorAvatar: 'assets/img/anjeka logo.jpg',
      date: new Date('2026-01-31'),
      tags: ['Service', 'Quality', 'Operations'],
      excerpt:
        'Service Failure in Hospitality facilities occurs when the service fails to meet the guest’s expectations.',
      contentHtml: `
        <h3>Service Failure in the Hospitality Industry</h3>
        <p>Service Failure in Hospitality facilities occurs when the service fails to meet the guest’s expectations.</p>
        <h4>Examples of Service Failure in Hospitality facilities include:</h4>
        <ul>
          <li>Rude employees</li>
          <li>Poor quality food</li>
          <li>Cold buffet meals</li>
          <li>Poor room service</li>
          <li>Incorrect guest bill</li>
          <li>Dirty or torn menu</li>
          <li>Overbooking rooms</li>
          <li>Delayed wake-up call</li>
          <li>Limited variety of food</li>
          <li>Slow internet connectivity</li>
          <li>Untidy appearance of staff</li>
          <li>Congested bar or restaurant</li>
          <li>Poor entertainment in rooms</li>
          <li>Slow service at the Front desk</li>
          <li>Slow service at the Restaurant</li>
          <li>Noise in the restaurant or room</li>
          <li>Amenities in rooms not working</li>
          <li>Missing equipment on a set table</li>
          <li>Checking a guest into a dirty guest room</li>
          <li>Checking a guest into the wrong guest room</li>
          <li>Serving cold food to a guest at the restaurant</li>
          <li>Dusty or worn out linen like bed sheets, towels and napkins</li>
          <li>Unattractive décor, layout and appearance of restaurant and rooms</li>
        </ul>
        <h3>Service Recovery Strategies in Hospitality facilities</h3>
        <p>In the event of failure, Service Recovery Strategies in Hospitality facilities include:</p>
        <ul>
          <li>Refunding the guest</li>
          <li>Offering alternatives</li>
          <li>Listening to the guest</li>
          <li>Correcting the failure</li>
          <li>Replacing the product</li>
          <li>Involving management</li>
          <li>Compensating the guest</li>
          <li>Apologising to the guest</li>
          <li>Taking immediate action</li>
          <li>Acknowledging the failure</li>
          <li>Improving service delivery</li>
          <li>Giving the guest a discount</li>
          <li>Empathising with the guest</li>
          <li>Following up on the complaint</li>
          <li>Offering exceptional treatment</li>
          <li>Taking responsibility for the failure</li>
          <li>Explaining the situation to the guest</li>
          <li>Transferring the guest to a new room or table</li>
          <li>Offering the guest a complimentary such as a free drink</li>
        </ul>
      `,
    },
    {
      title: 'Attributes of Competent Hospitality Professionals',
      slug: 'attributes-of-competent-hospitality-professionals',
      image: 'assets/img/img_1.png',
      category: 'Career & Skills',
      authorName: 'Anjeka Team',
      authorAvatar: 'assets/img/anjeka logo.jpg',
      date: new Date('2026-01-31'),
      tags: ['Skills', 'Service', 'Professionalism'],
      excerpt:
        'The Hospitality industry is a Service oriented industry. Most Hospitality personnel have to interact with guests.',
      contentHtml: `
        <h3>Attributes of Competent Hospitality Professionals</h3>
        <p>The Hospitality industry is a Service oriented industry. Most Hospitality personnel have to interact with guests. Mistakes can therefore be made in front of the guests. In addition, Hospitality products are often heterogeneous, intangible and perishable. Consequently, Hospitality employees need to be competent enough to deliver Quality Products and Services to guests.</p>
        <h4>The Attributes of Competent Hospitality Professionals include:</h4>
        <ul>
          <li>Tidy</li>
          <li>Neat</li>
          <li>Calm</li>
          <li>Alert</li>
          <li>Loyal</li>
          <li>Smile</li>
          <li>Polite</li>
          <li>Skilled</li>
          <li>Honest</li>
          <li>Patient</li>
          <li>Flexible</li>
          <li>Friendly</li>
          <li>Creative</li>
          <li>Punctual</li>
          <li>Etiquette</li>
          <li>Attentive</li>
          <li>Courteous</li>
          <li>Innovative</li>
          <li>Organised</li>
          <li>Empathetic</li>
          <li>Sales Ability</li>
          <li>Team Player</li>
          <li>Multi-Skilled</li>
          <li>Physically Fit</li>
          <li>Multi-Lingual</li>
          <li>Techno Savvy</li>
          <li>Good Conduct</li>
          <li>Good Memory</li>
          <li>Understanding</li>
          <li>Knowledgeable</li>
          <li>Positive Attitude</li>
          <li>Local Knowledge</li>
          <li>Personal Hygiene</li>
          <li>Interpersonal Skills</li>
          <li>Personal Grooming</li>
          <li>Cultural Awareness</li>
          <li>Industry Knowledge</li>
          <li>Pleasant Personality</li>
          <li>Emotional Intelligent</li>
          <li>Communication Skills</li>
          <li>Customer Service Skills</li>
          <li>Complaint Handling Skills</li>
          <li>Always aware of Current Events</li>
          <li>Have passion for the Hospitality industry</li>
        </ul>
      `,
    },
    {
      title: 'Motivating Hospitality Professionals',
      slug: 'motivating-hospitality-professionals',
      image: 'assets/img/img_2.png',
      category: 'People & Culture',
      authorName: 'Anjeka Team',
      authorAvatar: 'assets/img/anjeka logo.jpg',
      date: new Date('2026-01-31'),
      tags: ['HR', 'Leadership', 'Engagement'],
      excerpt:
        'Hospitality Careers have positive and negative aspects. Hospitality Professionals often enjoy a global career... Employee motivation is therefore important in the Hospitality industry.',
      contentHtml: `
        <h3>Motivating Hospitality Professionals</h3>
        <p>Hospitality Careers have positive and negative aspects. Hospitality Professionals often enjoy a global career, get to interact with guests including prominent people, have opportunities to consume the hospitality product and travel a lot. However, some of them feel that they are forced to work over unsocial hours, lack work-life balance, are insecure, receive low pay and experience job monotony. As a result, career change intentions among Hospitality employees are high. Employee motivation is therefore important in the Hospitality industry.</p>
        <h4>Hospitality employers can moreover motivate their employees through:</h4>
        <ul>
          <li>Delegation</li>
          <li>Career growth</li>
          <li>Equity at work</li>
          <li>Team building</li>
          <li>Job promotions</li>
          <li>Job enrichment</li>
          <li>Ethical business</li>
          <li>Fairness at work</li>
          <li>Good leadership</li>
          <li>Decentralization</li>
          <li>Fair compensation</li>
          <li>Employee benefits</li>
          <li>Praising employees</li>
          <li>Focusing on Quality</li>
          <li>Training employees</li>
          <li>Employee meetings</li>
          <li>Workplace diversity</li>
          <li>Open communication</li>
          <li>Management support</li>
          <li>Supporting employees</li>
          <li>Listening to employees</li>
          <li>Recognising employees</li>
          <li>Empowering employees</li>
          <li>Encouraging job rotation</li>
          <li>Giving employees a voice</li>
          <li>Providing safe workplaces</li>
          <li>Guaranteeing job security</li>
          <li>Practising good supervision</li>
          <li>Conducive work environment</li>
          <li>Encouraging work-life balance</li>
          <li>Granting leaves like study leaves</li>
          <li>Role and job transfers on request</li>
          <li>Encouraging open-door management</li>
          <li>Employee events like parties, fun days and trips</li>
          <li>Embracing employee corporate social responsibility initiatives</li>
          <li>Offering monetary rewards like vouchers, bonuses and commissions</li>
          <li>Offering non-monetary rewards like gifts, trips, employee of the month awards and club memberships</li>
        </ul>
      `,
    },
  ];

  getAllPosts(): BlogPostContent[] {
    return [...this.posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getPostBySlug(slug: string): BlogPostContent | undefined {
    return this.posts.find(p => p.slug === slug);
    }

  getRecentPosts(count = 3): BlogPostContent[] {
    return this.getAllPosts().slice(0, count);
  }

  getCategoriesWithCounts(): { name: string; count: number }[] {
    const map = new Map<string, number>();
    this.posts.forEach(p => map.set(p.category, (map.get(p.category) || 0) + 1));
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }

  getRelatedPosts(slug: string, count = 3): BlogPostContent[] {
    const current = this.getPostBySlug(slug);
    if (!current) return this.getRecentPosts(count);
    const byCategory = this.getAllPosts().filter(p => p.slug !== slug && p.category === current.category);
    const related = byCategory.slice(0, count);
    if (related.length < count) {
      const fill = this.getAllPosts().filter(p => p.slug !== slug && !related.includes(p)).slice(0, count - related.length);
      return [...related, ...fill];
    }
    return related;
  }
}
