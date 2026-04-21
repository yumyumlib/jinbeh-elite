import { Pool } from 'pg';

/**
 * Shared PostgreSQL connection pool for form submissions.
 *
 * The pool connects to the gov1_orchestrator database on the VPS PostgreSQL instance.
 * Environment variables control the connection — defaults match the Docker setup.
 */

let pool: Pool | null = null;

export function getPool(): Pool {
    if (!pool) {
        pool = new Pool({
            host: process.env.PGHOST || 'host.docker.internal',
            port: parseInt(process.env.PGPORT || '5433', 10),
            user: process.env.PGUSER || 'gov1',
            password: process.env.PGPASSWORD || 'jinbeh_gov1_2026',
            database: process.env.PGDATABASE || 'gov1_orchestrator',
            max: 5,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 5000,
        });
    }
    return pool;
}
