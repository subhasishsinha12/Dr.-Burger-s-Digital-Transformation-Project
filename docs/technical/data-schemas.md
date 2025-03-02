# Customer Data Schema

**Version:** v1.0.0  
**Last Updated:** March 2, 2025  
**Owner:** Data Engineering Team  
**Status:** Approved  

## Overview

This document defines the standard schema for customer data across all Dr. Burger systems. It establishes a single source of truth for customer information, ensuring consistency across all applications, services, and analytics platforms. The schema supports our personalization initiatives, loyalty program, and customer 360-degree view while maintaining compliance with privacy regulations.

## Schema Definition

### Core Customer Entity

The core customer entity contains all fundamental information about a customer.

#### Customer Object

| Field | Type | Required | Description | Example | PII | Encryption |
|-------|------|----------|-------------|---------|-----|------------|
| `customer_id` | String | Yes | Unique identifier for the customer | "cust_12345abcde" | No | No |
| `created_at` | Timestamp | Yes | When the customer record was created | "2025-01-15T14:30:22Z" | No | No |
| `updated_at` | Timestamp | Yes | When the customer record was last updated | "2025-02-28T09:45:11Z" | No | No |
| `email` | String | Yes | Customer's email address | "john.smith@example.com" | Yes | Yes |
| `phone` | String | No | Customer's phone number | "+14155551234" | Yes | Yes |
| `first_name` | String | Yes | Customer's first name | "John" | Yes | No |
| `last_name` | String | Yes | Customer's last name | "Smith" | Yes | No |
| `birth_date` | Date | No | Customer's birth date | "1990-05-15" | Yes | Yes |
| `status` | Enum | Yes | Customer account status | "ACTIVE" | No | No |
| `preferred_language` | String | No | ISO language code | "en-US" | No | No |
| `marketing_preferences` | Object | Yes | Marketing opt-in settings | *See Marketing Preferences Object* | No | No |
| `loyalty` | Object | No | Loyalty program information | *See Loyalty Object* | No | No |
| `subscription` | Object | No | Subscription program information | *See Subscription Object* | No | No |
| `last_login` | Timestamp | No | Last time customer logged in | "2025-03-01T12:34:56Z" | No | No |
| `verified` | Boolean | Yes | Whether customer's identity is verified | true | No | No |
| `app_version` | String | No | Last used app version | "3.4.2" | No | No |
| `source` | String | No | Where customer account was created | "MOBILE_APP" | No | No |
| `platform` | String | No | Customer's device platform | "iOS" | No | No |
| `tags` | Array[String] | No | Custom tags for segmentation | ["frequent_diner", "breakfast_regular"] | No | No |
| `metadata` | Object | No | Additional customer metadata | {"acquisition_campaign": "summer_2024"} | No | No |

**Valid Status Values:**
- `ACTIVE` - Normal active account
- `INACTIVE` - Account not used in 6+ months
- `SUSPENDED` - Account temporarily suspended (e.g., security concern)
- `CLOSED` - Account closed by customer
- `BANNED` - Account permanently banned

**Valid Source Values:**
- `MOBILE_APP` - Mobile application
- `WEB` - Website
- `IN_STORE` - Created in physical store
- `KIOSK` - Created at in-store kiosk
- `CALL_CENTER` - Created by customer service
- `PARTNER` - Created through partner integration
- `IMPORT` - Imported from legacy system

### Marketing Preferences Object

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `email_opt_in` | Boolean | Yes | Whether customer has opted in to email marketing | true |
| `sms_opt_in` | Boolean | Yes | Whether customer has opted in to SMS marketing | false |
| `push_opt_in` | Boolean | Yes | Whether customer has opted in to push notifications | true |
| `email_preferences` | Object | No | Specific email subscription preferences | {"promotions": true, "order_updates": true, "newsletter": false} |
| `preference_updated_at` | Timestamp | Yes | When preferences were last updated | "2025-02-10T16:42:31Z" |
| `communication_frequency` | String | No | Preferred communication frequency | "WEEKLY" |

**Valid Communication Frequency Values:**
- `DAILY` - Daily communications
- `WEEKLY` - Weekly communications
- `BIWEEKLY` - Every two weeks
- `MONTHLY` - Monthly communications
- `QUARTERLY` - Quarterly communications
- `SPECIAL_OFFERS_ONLY` - Only special offers

### Loyalty Object

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `loyalty_id` | String | Yes | Unique identifier for loyalty account | "lty_98765zyxwv" |
| `tier` | String | Yes | Current loyalty tier | "GOLD" |
| `points_balance` | Integer | Yes | Current points balance | 1250 |
| `lifetime_points` | Integer | Yes | Total points earned lifetime | 3750 |
| `tier_expiry_date` | Date | No | When current tier expires | "2026-03-31" |
| `points_expiry` | Array[Object] | No | Points expiration schedule | [{"amount": 200, "expiry_date": "2025-06-30"}] |
| `join_date` | Date | Yes | When customer joined loyalty program | "2024-08-15" |
| `last_activity_date` | Date | Yes | Date of last points-earning activity | "2025-02-28" |

**Valid Tier Values:**
- `BRONZE` - Entry-level tier
- `SILVER` - Mid-level tier
- `GOLD` - High-level tier
- `PLATINUM` - Top tier

### Subscription Object

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `subscription_id` | String | Yes | Unique identifier for subscription | "sub_1234567890" |
| `plan` | String | Yes | Subscription plan | "BURGER_PRIME" |
| `status` | String | Yes | Current status | "ACTIVE" |
| `start_date` | Date | Yes | When subscription started | "2025-01-01" |
| `next_billing_date` | Date | No | Next renewal date | "2025-04-01" |
| `billing_period` | String | Yes | Billing frequency | "MONTHLY" |
| `price` | Decimal | Yes | Subscription price | 9.99 |
| `payment_method` | Object | Yes | Payment method information | {"type": "CREDIT_CARD", "last_four": "4242"} |
| `auto_renew` | Boolean | Yes | Whether subscription auto-renews | true |
| `promotional_code` | String | No | Applied promotional code | "YEARLY20" |

**Valid Plan Values:**
- `BURGER_PRIME` - Standard subscription plan
- `BURGER_PRIME_FAMILY` - Family plan
- `BURGER_PRIME_STUDENT` - Student plan
- `BURGER_PRIME_ANNUAL` - Annual plan

**Valid Status Values:**
- `ACTIVE` - Active subscription
- `PAST_DUE` - Payment failed but still active
- `CANCELLED` - Cancelled but not yet expired
- `EXPIRED` - Subscription has ended
- `PAUSED` - Temporarily paused

### Address Object

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `address_id` | String | Yes | Unique identifier for address | "addr_abcde12345" |
| `type` | String | Yes | Type of address | "DELIVERY" |
| `label` | String | No | Customer-provided label | "Home" |
| `street` | String | Yes | Street address | "123 Main St" |
| `unit` | String | No | Apartment or unit number | "Apt 4B" |
| `city` | String | Yes | City | "San Francisco" |
| `state` | String | Yes | State or province | "CA" |
| `postal_code` | String | Yes | Postal or ZIP code | "94105" |
| `country` | String | Yes | ISO country code | "US" |
| `latitude` | Decimal | No | Latitude coordinate | 37.7749 |
| `longitude` | Decimal | No | Longitude coordinate | -122.4194 |
| `is_default` | Boolean | Yes | Whether this is customer's default address | true |
| `delivery_instructions` | String | No | Special delivery instructions | "Gate code: 1234" |
| `verified` | Boolean | Yes | Whether address has been verified | true |
| `created_at` | Timestamp | Yes | When address was created | "2025-01-15T14:30:22Z" |
| `updated_at` | Timestamp | Yes | When address was last updated | "2025-02-28T09:45:11Z" |

**Valid Type Values:**
- `DELIVERY` - Delivery address
- `BILLING` - Billing address
- `WORK` - Work address
- `OTHER` - Other address type

### Payment Method Object

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `payment_method_id` | String | Yes | Unique identifier for payment method | "pm_zyxwv98765" |
| `type` | String | Yes | Type of payment method | "CREDIT_CARD" |
| `is_default` | Boolean | Yes | Whether this is customer's default payment method | true |
| `last_four` | String | Conditional | Last four digits (required for cards) | "4242" |
| `expiry_month` | Integer | Conditional | Expiration month (1-12) | 12 |
| `expiry_year` | Integer | Conditional | Expiration year | 2028 |
| `card_brand` | String | Conditional | Card brand | "VISA" |
| `wallet_type` | String | Conditional | Digital wallet type | "APPLE_PAY" |
| `billing_address` | Object | No | Billing address | *See Address Object* |
| `created_at` | Timestamp | Yes | When payment method was created | "2025-01-15T14:30:22Z" |
| `updated_at` | Timestamp | Yes | When payment method was last updated | "2025-02-28T09:45:11Z" |
| `status` | String | Yes | Status of payment method | "ACTIVE" |

**Valid Type Values:**
- `CREDIT_CARD` - Credit card
- `DEBIT_CARD` - Debit card
- `DIGITAL_WALLET` - Digital wallet
- `GIFT_CARD` - Gift card
- `LOYALTY_POINTS` - Loyalty points
- `BANK_ACCOUNT` - Bank account

**Valid Status Values:**
- `ACTIVE` - Active and valid
- `EXPIRED` - Card has expired
- `DECLINED` - Card was declined
- `DISABLED` - Payment method disabled

### Customer Preferences Object

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `order_preferences` | Object | No | Ordering preferences | {"preferred_location": "store_12345", "favorite_pickup_time": "12:30"} |
| `dietary_preferences` | Array[String] | No | Dietary restrictions or preferences | ["vegetarian", "no_gluten"] |
| `favorite_items` | Array[String] | No | Favorite menu item IDs | ["item_burger_deluxe", "item_fries_large"] |
| `flavor_preferences` | Object | No | Flavor profile preferences | {"spicy": 4, "sweet": 2, "savory": 5} |
| `ui_preferences` | Object | No | UI customization preferences | {"dark_mode": true, "notifications_enabled": true} |
| `last_updated` | Timestamp | Yes | When preferences were last updated | "2025-02-28T09:45:11Z" |

**Valid Dietary Preference Values:**
- `vegetarian`, `vegan`, `pescatarian`
- `gluten_free`, `no_gluten`, `dairy_free`, `no_dairy`
- `no_nuts`, `no_shellfish`, `no_eggs`
- `keto`, `low_carb`, `low_sodium`, `low_sugar`
- `halal`, `kosher`

### Order History Reference

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `order_count` | Integer | Yes | Total number of orders placed | 42 |
| `first_order_date` | Date | Yes | Date of first order | "2024-09-15" |
| `last_order_date` | Date | Yes | Date of most recent order | "2025-02-28" |
| `avg_order_value` | Decimal | Yes | Average order value | 24.95 |
| `total_spend` | Decimal | Yes | Total lifetime spend | 1047.90 |
| `favorite_store` | String | No | Most frequently ordered from store | "store_12345" |
| `favorite_order_type` | String | Yes | Most frequent order type | "DELIVERY" |
| `frequent_items` | Array[Object] | No | Most frequently ordered items | [{"item_id": "item_burger_deluxe", "count": 15}] |
| `recent_orders` | Array[String] | No | Recent order IDs, limited to last 5 | ["ord_12345", "ord_23456"] |

### Behavioral Metrics

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `recency` | Integer | Yes | Days since last order | 3 |
| `frequency` | Decimal | Yes | Average orders per month | 5.2 |
| `monetary` | Decimal | Yes | Average monthly spend | 104.50 |
| `engagement_score` | Integer | Yes | Calculated engagement level (1-100) | 87 |
| `churn_risk` | String | Yes | Assessed risk of customer churn | "LOW" |
| `ltv_prediction` | Decimal | Yes | Predicted lifetime value | 2450.00 |
| `preferred_ordering_times` | Object | No | Preferred times to order | {"weekday": "17:30-19:30", "weekend": "12:00-14:00"} |
| `last_calculated` | Timestamp | Yes | When metrics were last calculated | "2025-03-01T00:00:00Z" |

**Valid Churn Risk Values:**
- `VERY_LOW` - Very low risk of churning
- `LOW` - Low risk of churning
- `MEDIUM` - Medium risk of churning
- `HIGH` - High risk of churning
- `VERY_HIGH` - Very high risk of churning

## Complete Example

```json
{
  "customer_id": "cust_12345abcde",
  "created_at": "2024-09-15T10:23:45Z",
  "updated_at": "2025-03-01T14:32:10Z",
  "email": "john.smith@example.com",
  "phone": "+14155551234",
  "first_name": "John",
  "last_name": "Smith",
  "birth_date": "1990-05-15",
  "status": "ACTIVE",
  "preferred_language": "en-US",
  "marketing_preferences": {
    "email_opt_in": true,
    "sms_opt_in": false,
    "push_opt_in": true,
    "email_preferences": {
      "promotions": true,
      "order_updates": true,
      "newsletter": false
    },
    "preference_updated_at": "2025-02-10T16:42:31Z",
    "communication_frequency": "WEEKLY"
  },
  "loyalty": {
    "loyalty_id": "lty_98765zyxwv",
    "tier": "GOLD",
    "points_balance": 1250,
    "lifetime_points": 3750,
    "tier_expiry_date": "2026-03-31",
    "points_expiry": [
      {
        "amount": 200,
        "expiry_date": "2025-06-30"
      },
      {
        "amount": 350,
        "expiry_date": "2025-09-30"
      }
    ],
    "join_date": "2024-09-15",
    "last_activity_date": "2025-02-28"
  },
  "subscription": {
    "subscription_id": "sub_1234567890",
    "plan": "BURGER_PRIME",
    "status": "ACTIVE",
    "start_date": "2025-01-01",
    "next_billing_date": "2025-04-01",
    "billing_period": "MONTHLY",
    "price": 9.99,
    "payment_method": {
      "type": "CREDIT_CARD",
      "last_four": "4242"
    },
    "auto_renew": true
  },
  "addresses": [
    {
      "address_id": "addr_abcde12345",
      "type": "DELIVERY",
      "label": "Home",
      "street": "123 Main St",
      "unit": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "postal_code": "94105",
      "country": "US",
      "latitude": 37.7749,
      "longitude": -122.4194,
      "is_default": true,
      "delivery_instructions": "Gate code: 1234",
      "verified": true,
      "created_at": "2024-09-15T10:25:12Z",
      "updated_at": "2024-09-15T10:25:12Z"
    },
    {
      "address_id": "addr_fghij67890",
      "type": "WORK",
      "label": "Office",
      "street": "555 Market St",
      "unit": "Floor 10",
      "city": "San Francisco",
      "state": "CA",
      "postal_code": "94105",
      "country": "US",
      "latitude": 37.7896,
      "longitude": -122.4001,
      "is_default": false,
      "delivery_instructions": "Ask for John at reception",
      "verified": true,
      "created_at": "2024-10-03T09:12:45Z",
      "updated_at": "2024-10-03T09:12:45Z"
    }
  ],
  "payment_methods": [
    {
      "payment_method_id": "pm_zyxwv98765",
      "type": "CREDIT_CARD",
      "is_default": true,
      "last_four": "4242",
      "expiry_month": 12,
      "expiry_year": 2028,
      "card_brand": "VISA",
      "created_at": "2024-09-15T10:30:22Z",
      "updated_at": "2024-09-15T10:30:22Z",
      "status": "ACTIVE"
    },
    {
      "payment_method_id": "pm_abcde12345",
      "type": "DIGITAL_WALLET",
      "is_default": false,
      "wallet_type": "APPLE_PAY",
      "created_at": "2024-11-20T15:45:33Z",
      "updated_at": "2024-11-20T15:45:33Z",
      "status": "ACTIVE"
    }
  ],
  "preferences": {
    "order_preferences": {
      "preferred_location": "store_54321",
      "favorite_pickup_time": "12:30",
      "default_order_type": "PICKUP"
    },
    "dietary_preferences": ["no_gluten", "low_sugar"],
    "favorite_items": ["item_burger_deluxe", "item_fries_large", "item_salad_caesar"],
    "flavor_preferences": {
      "spicy": 4,
      "sweet": 2,
      "savory": 5
    },
    "ui_preferences": {
      "dark_mode": true,
      "notifications_enabled": true,
      "save_recent_orders": true
    },
    "last_updated": "2025-02-15T18:22:43Z"
  },
  "order_history": {
    "order_count": 42,
    "first_order_date": "2024-09-15",
    "last_order_date": "2025-02-28",
    "avg_order_value": 24.95,
    "total_spend": 1047.90,
    "favorite_store": "store_54321",
    "favorite_order_type": "PICKUP",
    "frequent_items": [
      {"item_id": "item_burger_deluxe", "count": 15},
      {"item_id": "item_fries_large", "count": 22},
      {"item_id": "item_salad_caesar", "count": 10}
    ],
    "recent_orders": ["ord_67890", "ord_54321", "ord_43210", "ord_32109", "ord_21098"]
  },
  "behavioral_metrics": {
    "recency": 3,
    "frequency": 5.2,
    "monetary": 104.50,
    "engagement_score": 87,
    "churn_risk": "LOW",
    "ltv_prediction": 2450.00,
    "preferred_ordering_times": {
      "weekday": "17:30-19:30",
      "weekend": "12:00-14:00"
    },
    "last_calculated": "2025-03-01T00:00:00Z"
  },
  "last_login": "2025-03-01T12:34:56Z",
  "verified": true,
  "app_version": "3.4.2",
  "source": "MOBILE_APP",
  "platform": "iOS",
  "tags": ["frequent_diner", "breakfast_regular", "subscription_member"],
  "metadata": {
    "acquisition_campaign": "summer_2024",
    "referral_source": "existing_customer",
    "loyalty_campaign_source": "email_blast_09_2024"
  }
}
```

## Data Governance

### PII Handling

Fields marked as PII must adhere to our data protection policies:

1. **Storage**: All PII must be stored with field-level encryption
2. **Access**: Access to PII fields requires specific authorization
3. **Retention**: PII is subject to our retention policy (24 months after account closure)
4. **Data Subject Rights**: Must support data subject access requests (DSAR)
5. **Minimization**: Only collect PII that serves a specific business purpose

### Field-level Encryption

Fields marked for encryption in the schema must use our standard encryption process:

1. AES-256 encryption with key rotation every 90 days
2. Encryption keys stored in AWS KMS
3. Access to decryption keys logged and audited

### Data Quality Rules

| Field | Quality Rule | Validation |
|-------|-------------|------------|
| `email` | Must be valid email format | Regex validation |
| `phone` | Must be in E.164 format | E.164 standard validation |
| `first_name`, `last_name` | No special characters except hyphen and apostrophe | Regex validation |
| `birth_date` | Must be a valid date, customer must be at least 13 years old | Range validation |
| `postal_code` | Must match country format | Country-specific validation |

### Data Lineage

The Customer Data Platform (CDP) is the system of record for customer data. All updates to customer data should flow through the CDP API to maintain data integrity.

**Data Flow:**
1. Source systems (mobile app, website, in-store POS) capture customer data
2. Data is sent to the Customer Service via API
3. Customer Service updates the CDP
4. CDP propagates changes to downstream systems
5. Analytical copies are refreshed in the data warehouse

## Schema Versioning

This schema uses semantic versioning:

- Major version changes (v1.0.0 → v2.0.0): Breaking changes
- Minor version changes (v1.0.0 → v1.1.0): Backward-compatible additions
- Patch version changes (v1.0.0 → v1.0.1): Documentation changes or clarifications

## Change Management

Updates to the customer schema follow our standard change management process:

1. Schema changes proposed and reviewed by Data Governance Council
2. Impact assessment across all consuming systems
3. Migration plan developed for existing data
4. Changes implemented in development environment
5. Comprehensive testing with sample data
6. Scheduled deployment with appropriate downtime notification
7. Post-implementation validation

## Related Schemas

The Customer Schema relates to several other key data schemas:

- **Order Schema**: References customer_id
- **Loyalty Schema**: Extends customer loyalty information
- **Subscription Schema**: Extends subscription details
- **Marketing Schema**: Used for campaign targeting
- **Analytics Schema**: Derived analytical views of customer data

## Implementation

### Database Implementation

The Customer Schema is implemented across our data platforms:

**Operational Database (MongoDB):**
- Document-based storage of customer profiles
- Indexed on customer_id, email, and phone
- Sharded by customer_id

**Analytical Database (Snowflake):**
- Dimensional model with customer dimension
- Historical tracking via SCD Type 2
- Aggregated customer metrics

### GraphQL Implementation

The Customer Schema is exposed via GraphQL API:

```graphql
type Customer {
  customerId: ID!
  email: String!
  phone: String
  firstName: String!
  lastName: String!
  birthDate: Date
  status: CustomerStatus!
  # Additional fields...
}

enum CustomerStatus {
  ACTIVE
  INACTIVE
  SUSPENDED
  CLOSED
  BANNED
}

type Query {
  getCustomer(customerId: ID!): Customer
  searchCustomers(query: CustomerSearchInput!): [Customer]
}

type Mutation {
  createCustomer(input: CustomerCreateInput!): Customer
  updateCustomer(customerId: ID!, input: CustomerUpdateInput!): Customer
  deleteCustomer(customerId: ID!): Boolean
}
```

## Appendix

### Migration Notes

When migrating from the legacy customer schema, note the following mapping differences:

| Legacy Field | New Field | Transformation |
|--------------|-----------|----------------|
| `user_id` | `customer_id` | Prefix legacy ID with "cust_" |
| `user_email` | `email` | Direct mapping |
| `telephone` | `phone` | Convert to E.164 format |
| `first_name`, `last_name` | `first_name`, `last_name` | Direct mapping |
| `dob` | `birth_date` | Convert from MM/DD/YYYY to ISO format |
| `active` | `status` | If true → "ACTIVE", else → "INACTIVE" |
| `marketing_opt_in` | `marketing_preferences.email_opt_in` | Direct mapping |

### Compliance Checklist

- [ ] PII fields encrypted at rest
- [ ] Consent tracking implemented
- [ ] Data retention policy applied
- [ ] Right to access support
- [ ] Right to erasure support
- [ ] Data portability support
- [ ] Purpose limitation documented
- [ ] Data minimization confirmed

---

**Document Information**
- Version: 1.0.0
- Last Updated: March 2, 2025
- Author: Data Engineering Team
- Approved by: Chief Data Officer, Chief Privacy Officer
- Next Review: September 2025
